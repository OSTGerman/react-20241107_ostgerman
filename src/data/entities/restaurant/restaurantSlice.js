import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./getRestaurants";
import { getRestaurantById } from "./getRestaurantById";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
      })
      .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      }),
});

export const {
  selectAll: selectRestaurants,
  selectById: selectRestaurantById,
} = entityAdapter.getSelectors((state) => state["restaurant"]);
