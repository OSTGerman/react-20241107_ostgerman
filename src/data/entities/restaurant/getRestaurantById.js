import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "./restaurantSlice";
import { API_BASE } from "../../api";

export const getRestaurantById = createAsyncThunk(
  "restaurant/getRestaurantById",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(`${API_BASE}/restaurant/${restaurantId}`);
    const result = await response.json();

    if (!result) {
      rejectWithValue("restaurant/getRestaurantById no data");
      return;
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      return !selectRestaurantById(getState(), restaurantId);
    },
  }
);
