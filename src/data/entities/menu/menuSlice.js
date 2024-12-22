import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getMenuByRestaurantId } from "./getMenuByRestaurantId";
import { getMenuItemById } from "./getMenuItemById";

const entityAdapter = createEntityAdapter();

export const menuSlice = createSlice({
  name: "menu",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(getMenuByRestaurantId.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
      })
      .addCase(getMenuItemById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      }),
});

export const { selectById: selectMenuItemById } = entityAdapter.getSelectors(
  (state) => state["menu"]
);
