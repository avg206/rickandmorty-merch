import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/rootReducer';

import { charactersAdapter } from './adapter';
import { internalPageSize } from './constants';

export const selectCharacter = (state: RootState) => state.character;

export const characterSelectors = charactersAdapter.getSelectors(selectCharacter);

export const selectCharacterInternalPage = (state: RootState) => selectCharacter(state).internalPage;
export const selectCharacterTotalItems = (state: RootState) => selectCharacter(state).totalItems;
export const selectCharacterState = (state: RootState) => selectCharacter(state).loading;
export const selectOpenedCharacterId = (state: RootState) => selectCharacter(state).openedCharacterId;
export const selectCharacterLoadedStatus = (state: RootState) => selectCharacter(state).loaded;

export const selectOpenedCharacter = createSelector(
  selectOpenedCharacterId,
  characterSelectors.selectEntities,
  (id, entries) => {
    if (!id || !entries[id]) {
      return undefined;
    }

    return entries[id];
  }
);

export const selectCharactersList = createSelector(
  characterSelectors.selectAll,
  selectCharacterInternalPage,
  (characters, internalPage) => {
    return characters.slice((internalPage - 1) * internalPageSize, internalPage * internalPageSize);
  }
);
