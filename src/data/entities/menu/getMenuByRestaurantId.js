import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE } from "../../api";

export const getMenuByRestaurantId = createAsyncThunk(
  "menu/getMenuByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `${API_BASE}/dishes?restaurantId=${restaurantId}`
    );
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("menu/getMenuByRestaurantId no data");
      return;
    }

    return result;
  }
);
