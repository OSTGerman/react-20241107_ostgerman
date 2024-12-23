import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUsers } from "./userSlice";
import { API_BASE } from "../../api";

export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (_, { rejectWithValue }) => {
    const response = await fetch(`${API_BASE}/users`);
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("user/getUsers no data");
      return;
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectUsers(getState()).length === 0;
    },
  }
);
