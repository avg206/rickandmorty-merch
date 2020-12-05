import { createReducer, SerializedError } from '@reduxjs/toolkit';

import { actionTypeEndsWith } from 'src/utils/redux';

import { charactersAdapter } from './adapter';
import { characterSliceName } from './constants';

interface CharacterState {
  loading: boolean;
  totalAmount: number;
  error?: SerializedError;
}

export const initialState = charactersAdapter.getInitialState<CharacterState>({
  loading: false,
  totalAmount: 0,
});

const characterReducer = createReducer(initialState, (builder) => {
  builder
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
