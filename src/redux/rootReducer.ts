import { combineReducers } from '@reduxjs/toolkit';

import characterReducer from 'src/redux/character';

const rootReducer = combineReducers({
  character: characterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
