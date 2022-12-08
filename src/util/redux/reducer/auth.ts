import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
const initialState: {
  id:string,
  firstname:string,
  lastname:string,
  username:string,
  email:string,
  createdAt:string,
  sessionToken:string
}= {
  id:'',
  firstname:'',
  lastname:'',
  username:'',
  email:'',
  createdAt:'',
  sessionToken:''
}

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadAuthData: (
      state, 
      action: PayloadAction<typeof initialState>
    ) => {
      state = action.payload;
      return state;
    },
  },
});

export const { loadAuthData } = authReducer.actions;
export default authReducer.reducer;
