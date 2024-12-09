import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./slices/restaurantSlice";
import { menuSlice } from "./slices/menuSlice";
import { reviewSlice } from "./slices/reviewSlice";
import { userSlice } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [menuSlice.name]: menuSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});
