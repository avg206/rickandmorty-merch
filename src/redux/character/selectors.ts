import { RootState } from 'src/redux/rootReducer';

import { charactersAdapter } from './adapter';

export const selectCharacter = (state: RootState) => state.character;

export const projectSelectors = charactersAdapter.getSelectors(selectCharacter);
