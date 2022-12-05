import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
const initialState: {
  firstname:string, 
  lastname:string, 
  sessionToken:string
}= {
  firstname:'',
  lastname:'',
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
