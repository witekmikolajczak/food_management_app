import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import createReducer from "./root";
import { authApi } from "./api/auth";
import { authListenerMiddleware } from "./middleware/auth";
import { productListenerMiddleware } from "./middleware/product";
export function initStore() {
  return configureStore({
    reducer: createReducer(),
    //@ts-expect-error
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      authApi.middleware,
      authListenerMiddleware.middleware,
      productListenerMiddleware.middleware,
    ],
  });
}
const store = initStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
