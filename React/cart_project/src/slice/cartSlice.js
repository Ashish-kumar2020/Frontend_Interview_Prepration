import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductAsync = createAsyncThunk(
  "cart/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      return data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cart: [],
    status: "idle",
    error: null,
  },

  reducers: {
    addToCart(state, action) {
      state.cart.push({
        ...action.payload,
        qty: 1,
      });
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    changeCartQty(state, action) {
      const { id, qty } = action.payload;
      const product = state.cart.find((item) => item.id === id);
      if (product) {
        product.qty = qty;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProductAsync.fulfilled, (state, action) => {
      state.status = "idle";
      state.products = action.payload;
    });
    builder.addCase(fetchProductAsync.rejected, (state, action) => {
      state.status = "idle";
      state.error = action.payload;
    });
  },
});

export const { addToCart, removeFromCart, changeCartQty } = cartSlice.actions;
export default cartSlice.reducer;
