import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import filterSlice from "./slice/filterSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    filter: filterSlice,
  },
});

export default store;
