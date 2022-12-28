import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface AuthInterface {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  createdAt: string;
  sessionToken: string;
  isAuthenticated?: boolean;
}
const emptyState = {
  id: "",
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  createdAt: "",
  sessionToken: "",
  isAuthenticated: false,
};
const initState =
  localStorage.getItem("user") !== null
    ? JSON.parse(localStorage.getItem("user")!)
    : emptyState;
const initialState: AuthInterface = initState;

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadAuthData: (state, action: PayloadAction<typeof initialState>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { loadAuthData } = authReducer.actions;
export default authReducer.reducer;
