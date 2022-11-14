import { createAsyncThunk } from "@reduxjs/toolkit";

import * as productkAPI from "../../utils/api/productApi";

// eslint-disable-next-line import/prefer-default-export
export const getAllProducts = createAsyncThunk(
  "allProducts/get",
  async (_, { rejectWithValue }) => {
    try {
      const result = await productkAPI.getAllProductsAPI();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
