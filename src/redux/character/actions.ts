import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

import { apiCall } from 'src/utils/api';
import { ApiResponse, Character } from 'src/types';

import { characterSliceName } from './constants';

export const openPage = createAction<number>(`${characterSliceName}/openPage`);
export const resetSearch = createAction(`${characterSliceName}/resetSearch`);

export const openCharacterDetails = createAction<number>(`${characterSliceName}/openCharacterDetails`);
export const closeCharacterDetails = createAction(`${characterSliceName}/closeCharacterDetails`);

export const searchCharacters = createAsyncThunk(`${characterSliceName}/searchCharacters`, (params: string) =>
  apiCall<ApiResponse<Character>>(`https://rickandmortyapi.com/api/character?${params}`)
);
