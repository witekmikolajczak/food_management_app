import { combineReducers } from 'redux';
import { authApi } from './/api/auth';
import authReducer from './reducer/auth';


const initialReducers = {
  [authApi.reducerPath]: authApi.reducer,
  auth: authReducer,
};

export const createReducer = () => {
  return combineReducers({
    ...initialReducers,
  });
};

export default createReducer;
