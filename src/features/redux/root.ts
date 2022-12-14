import { combineReducers } from "redux";
import { authApi } from ".//api/auth";
import { productApi } from "./api/product";

import authReducer from "./reducer/auth";
import loadingReducer from "./reducer/loading";
import productReducer from "./reducer/product";

const initialReducers = {
  [authApi.reducerPath]: authApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  auth: authReducer,
  loading: loadingReducer,
  product: productReducer,
};

export const createReducer = () => {
  return combineReducers({
    ...initialReducers,
  });
};

export default createReducer;
