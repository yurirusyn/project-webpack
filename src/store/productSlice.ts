import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';

type Product = {
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
}

type ProductsState = {
  list: Product[];
  loading: boolean;
  error: string | null;
}
export const fetchProducts = createAsyncThunk<Product[], undefined, {rejectValue: string}>(
    'products/fetchProducts',
    async function (_, { rejectWithValue }) {
      const response = await fetch('https://62160e807428a1d2a3598008.mockapi.io/bicicle');

      if (!response.ok) {
        return rejectWithValue('Server Error!');
      }

      const data = await response.json();

      return data;
    }
);


const initialState: ProductsState = {
  list: [],
  loading: false,
  error: null,
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  }
});


export default todoSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}