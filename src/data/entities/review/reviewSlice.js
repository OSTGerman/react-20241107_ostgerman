import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./getReviewsByRestaurantId";

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: "review",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(
      getReviewsByRestaurantId.fulfilled,
      (state, { payload }) => {
        entityAdapter.setMany(state, payload);
      }
    ),
});

export const { selectById: selectReviewById } = entityAdapter.getSelectors(
  (state) => state["review"]
);
