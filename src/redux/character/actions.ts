import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

import { apiCall } from 'src/utils/api';
import { ApiResponse, Character } from 'src/types';

import { characterSliceName } from './constants';

export const changePage = createAction<number>(`${characterSliceName}/changePage`);

export const resetState = createAction(`${characterSliceName}/resetState`);

export const openDetails = createAction<number>(`${characterSliceName}/openDetails`);
export const closeDetails = createAction(`${characterSliceName}/closeDetails`);

export const searchCharacters = createAsyncThunk(`${characterSliceName}/searchCharacters`, (params: string) =>
  apiCall<ApiResponse<Character>>(`https://rickandmortyapi.com/api/character?${params}`)
);
