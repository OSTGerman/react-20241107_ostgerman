import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectMenuItemById } from "./menuSlice";
import { API_BASE } from "../../api";

export const getMenuItemById = createAsyncThunk(
  "menu/getMenuItemById",
  async (menuItemId, { rejectWithValue }) => {
    const response = await fetch(`${API_BASE}/dish/${menuItemId}`);
    const result = await response.json();

    if (!result) {
      rejectWithValue("menu/getMenuItemById no data");
      return;
    }

    return result;
  },
  {
    condition: (menuItemId, { getState }) => {
      return !selectMenuItemById(getState(), menuItemId);
    },
  }
);
