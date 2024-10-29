import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsDetails = createAsyncThunk(
  "cart/fetchProducts",
  async (_, thunkAPIData) => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      return data.products;
    } catch (error) {
      return thunkAPIData.rejectWithValue(error.message);
    }
  }
);

const cart = createSlice({
  name: "cartslice",
  initialState: {
    product: [],
    cart: [],
    status: "idle",
    error: null,
  },

  reducers: {
    addToCart(state, action) {
      state.cart.push({ ...action.payload, qty: 1 });
    },
    removeFromeCart(state, action) {
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
    addCase();
  },
});
