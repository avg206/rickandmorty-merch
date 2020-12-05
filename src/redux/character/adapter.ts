import { createEntityAdapter } from '@reduxjs/toolkit';

import { Character } from 'src/types';

export const charactersAdapter = createEntityAdapter<Character>();
