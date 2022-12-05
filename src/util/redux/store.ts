import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createReducer from './root';
import { authApi } from './api/auth';

export function initStore() {
  return configureStore({
    reducer: createReducer(),
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(), 
      authApi.middleware
    ],
  });
}
const store = initStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
