import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "./productOperations";

const initialState = {
  products: [],
  isLoading: false,
  isLoggedIn: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
      state.books = payload;
      state.isLoading = false;
      state.error = null;
    },
    [getAllProducts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
export default productSlice.reducer;
