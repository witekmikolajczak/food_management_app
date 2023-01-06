import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const initialState: { show: boolean } = { show: false };

const dropdownReducer = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    toggleDropdown: (state, action: PayloadAction<typeof initialState>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { toggleDropdown } = dropdownReducer.actions;
export default dropdownReducer.reducer;
