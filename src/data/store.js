import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./entities/cart/cartSlice";
import { apiSlice } from "./services/api";

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
