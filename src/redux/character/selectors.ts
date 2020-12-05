import { RootState } from 'src/redux/rootReducer';

import { charactersAdapter } from './adapter';

export const selectCharacter = (state: RootState) => state.character;

export const characterSelectors = charactersAdapter.getSelectors(selectCharacter);

export const selectCharacterState = (state: RootState) => selectCharacter(state).loading;
