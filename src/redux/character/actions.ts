import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiCall } from 'src/utils/api';
import { ApiResponse, Character } from 'src/types';

import { characterSliceName } from './constants';

export const searchCharacters = createAsyncThunk(`${characterSliceName}/searchCharacters`, (query: string) =>
  apiCall<ApiResponse<Character>>(`/character?name=${query}`)
);
