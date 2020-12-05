import { createReducer, SerializedError } from '@reduxjs/toolkit';

import { actionTypeEndsWith } from 'src/utils/redux';

import { searchCharacters } from './actions';
import { charactersAdapter } from './adapter';
import { characterSliceName, externalPageSize } from './constants';

interface CharacterState {
  loading: boolean;
  totalAmount: number;
  internalPage: number;
  error?: SerializedError;
}

export const initialState = charactersAdapter.getInitialState<CharacterState>({
  loading: false,
  internalPage: 1,
  totalAmount: 0,
});

const characterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(searchCharacters.fulfilled, (state, action) => {
      state.totalAmount = action.payload.info.count;

      charactersAdapter.setAll(state, action.payload.results);
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
