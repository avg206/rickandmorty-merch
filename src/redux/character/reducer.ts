import { createReducer, SerializedError } from '@reduxjs/toolkit';

import { actionTypeEndsWith } from 'src/utils/redux';
import { getQueryStringFromUrl } from 'src/utils/url';

import { searchCharacters, changePage, resetState, openDetails, closeDetails } from './actions';
import { charactersAdapter } from './adapter';
import { characterSliceName } from './constants';

interface CharacterState {
  loading: boolean;
  totalAmount: number;
  internalPage: number;
  nextParams?: string;
  error?: SerializedError;
  openCharacterId?: number;
}

export const initialState = charactersAdapter.getInitialState<CharacterState>({
  loading: false,
  internalPage: 1,
  totalAmount: 0,
});

const characterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openDetails, (state, action) => {
      state.openCharacterId = action.payload;
    })
    .addCase(closeDetails, (state) => {
      state.openCharacterId = undefined;
    })
    .addCase(changePage, (state, action) => {
      state.internalPage = action.payload;
    })
    .addCase(resetState, (state) => initialState)
    .addCase(searchCharacters.fulfilled, (state, action) => {
      state.totalAmount = action.payload.info.count;
      state.nextParams = getQueryStringFromUrl(action.payload.info.next);

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
    });
});

export default characterReducer;
