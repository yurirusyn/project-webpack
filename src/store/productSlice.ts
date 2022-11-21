import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction,
} from "@reduxjs/toolkit";
import ProductsService from "../services/index";

export type TProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type TRootState = {
  list: TProduct[];
  loading: boolean;
  error: string | null;
};

export const fetchProducts = createAsyncThunk<
  TProduct[],
  undefined,
  { rejectValue: string }
>("products/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const response = await ProductsService.fetchProducts();

    return response.data;
  } catch (error) {
    return rejectWithValue("Server Error!");
  }
});

const initialState: TRootState = {
  list: [],
  loading: false,
  error: null,
};

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.list = [];
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<TProduct[]>) => {
          state.list = action.payload;
          state.loading = false;
        }
      )
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
        state.list = [];
      });
  },
});

export default productSlice.reducer;
