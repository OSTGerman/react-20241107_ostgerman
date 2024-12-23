import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./getUsers";

const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: "user",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    }),
});

export const { selectAll: selectUsers, selectById: selectUserById } =
  entityAdapter.getSelectors((state) => state["user"]);
