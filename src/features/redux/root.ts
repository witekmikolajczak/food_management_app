import { combineReducers } from "redux";
import { authApi } from ".//api/auth";
import { productApi } from "./api/product";

import authReducer from "./reducer/auth";
import loadingReducer from "./reducer/loading";
import productReducer from "./reducer/product";
import dropdownReducer from "./reducer/toggleDropdown";

const initialReducers = {
  [authApi.reducerPath]: authApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  auth: authReducer,
  loading: loadingReducer,
  product: productReducer,
  dropdown: dropdownReducer,
};

export const createReducer = () => {
  return combineReducers({
    ...initialReducers,
  });
};

export default createReducer;
