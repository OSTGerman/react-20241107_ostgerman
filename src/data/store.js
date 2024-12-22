import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant/restaurantSlice";
import { menuSlice } from "./entities/menu/menuSlice";
import { reviewSlice } from "./entities/review/reviewSlice";
import { userSlice } from "./entities/user/userSlice";
import { cartSlice } from "./entities/cart/cartSlice";
import { requestSlice } from "./request/requestSlice";

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [menuSlice.name]: menuSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
  },
});
