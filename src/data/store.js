import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./entities/cart/cartSlice";

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
  },
});
