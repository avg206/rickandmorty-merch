import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/rootReducer';

import { charactersAdapter } from './adapter';
import { internalPageSize } from './constants';

export const selectCharacter = (state: RootState) => state.character;

export const characterSelectors = charactersAdapter.getSelectors(selectCharacter);

export const selectCharactersInternalPage = (state: RootState) => selectCharacter(state).internalPage;

export const selectCharactersTotalAmount = (state: RootState) => selectCharacter(state).totalAmount;

export const selectCharacterState = (state: RootState) => selectCharacter(state).loading;

export const selectCharactersList = createSelector(
  characterSelectors.selectAll,
  selectCharactersInternalPage,
  (characters, internalPage) => {
    return characters.slice((internalPage - 1) * internalPageSize, internalPage * internalPageSize);
  }
);
