import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
const initialState: ProductInterface[] = []

const productReducer = createSlice({
  name: 'product',
  initialState,
  reducers: {
    loadProductCollection: (
      state, 
      action: PayloadAction<typeof initialState>
    ) => {
      state = action.payload;
      return state;
    },
  },
});


export const { loadProductCollection } = productReducer.actions;
export default productReducer.reducer;
