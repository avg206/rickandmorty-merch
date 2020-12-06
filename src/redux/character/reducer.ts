import { createReducer, SerializedError } from '@reduxjs/toolkit';

import { actionTypeEndsWith } from 'src/utils/redux';
import { getQueryStringFromUrl } from 'src/utils/url';

import { searchCharacters, openPage, resetSearch, openCharacterDetails, closeCharacterDetails } from './actions';
import { charactersAdapter } from './adapter';
import { characterSliceName } from './constants';

interface CharacterState {
  loading: boolean;
  loaded?: boolean;
  totalItems: number;
  internalPage: number;
  nextParams?: string;
  error?: SerializedError;
  openedCharacterId?: number;
}

export const initialState = charactersAdapter.getInitialState<CharacterState>({
  loading: false,
  internalPage: 1,
  totalItems: 0,
});

const characterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openCharacterDetails, (state, action) => {
      state.openedCharacterId = action.payload;
    })
    .addCase(closeCharacterDetails, (state) => {
      state.openedCharacterId = undefined;
    })
    .addCase(openPage, (state, action) => {
      state.internalPage = action.payload;
    })
    .addCase(resetSearch, (state) => initialState)
    .addCase(searchCharacters.fulfilled, (state, action) => {
      state.totalItems = action.payload.info.count;
      state.nextParams = getQueryStringFromUrl(action.payload.info.next);
      state.loaded = true;

      charactersAdapter.addMany(state, action.payload.results);
    })
    .addMatcher(actionTypeEndsWith(characterSliceName, '/pending'), (state) => {
      state.loading = true;
      state.error = undefined;
    })
    .addMatcher(actionTypeEndsWith(characterSliceName, '/fulfilled'), (state) => {
      state.loading = false;
      state.error = undefined;
    })
    .addMatcher(actionTypeEndsWith(characterSliceName, '/rejected'), (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.loaded = true;
    });
});

export default characterReducer;
