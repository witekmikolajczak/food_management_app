import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const initialState: { isLoading: boolean } = {
  isLoading: false,
};

const loadingReducer = createSlice({
  name: "loading",
  initialState,
  reducers: {
    changeIsLoadingStatus: (
      state,
      action: PayloadAction<typeof initialState>
    ) => {
      state = action.payload;
      return state;
    },
  },
});

export const { changeIsLoadingStatus } = loadingReducer.actions;
export default loadingReducer.reducer;
