import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE } from "../../api";

export const getReviewsByRestaurantId = createAsyncThunk(
  "review/getReviewsByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `${API_BASE}/reviews?restaurantId=${restaurantId}`
    );
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("review/getReviewsByRestaurantId no data");
      return;
    }

    return result;
  }
);
