import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurants } from "./restaurantSlice";
import { API_BASE } from "../../api";

export const getRestaurants = createAsyncThunk(
  "restaurant/getRestaurants",
  async (_, { rejectWithValue }) => {
    const response = await fetch(`${API_BASE}/restaurants`);
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("restaurant/getRestaurants no data");
      return;
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectRestaurants(getState()).length === 0;
    },
  }
);
