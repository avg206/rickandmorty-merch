import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

const isDevelopment = process.env.NODE_ENV !== 'production';

const store = configureStore({
  reducer: rootReducer,
  devTools: isDevelopment,
});

export default store;
