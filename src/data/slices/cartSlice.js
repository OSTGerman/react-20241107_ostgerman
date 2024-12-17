import { createSelector, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  selectors: {
    selectCartMenuItemCountById: (state, id) => state[id] ?? 0,
  },
  reducers: {
    addMenuItemToCart: (state, { payload }) => {
      state[payload] = (state[payload] ?? 0) + 1;
    },

    removeMenuItemFromCart: (state, { payload }) => {
      --state[payload] > 0 || delete state[payload];
    },
  },
});

export const { selectCartMenuItemCountById } = cartSlice.selectors;

export const { addMenuItemToCart, removeMenuItemFromCart } = cartSlice.actions;

const selectCart = (state) => state["cart"];

export const selectCartItems = createSelector([selectCart], (cart) =>
  Object.keys(cart).map((key) => ({
    id: key,
    amount: cart[key],
  }))
);
