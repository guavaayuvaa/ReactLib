import { configureStore } from '@reduxjs/toolkit';
import { errorLogsApi } from '../services/errorLogsApi';

export const store = configureStore({
  reducer: {
    [errorLogsApi.reducerPath]: errorLogsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(errorLogsApi.middleware),
  devTools: true,
});
