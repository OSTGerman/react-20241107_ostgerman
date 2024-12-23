import { createSlice } from "@reduxjs/toolkit";
import {
  REQUEST_STATUS_FULFILLED,
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "./requestStatus";

export const requestSlice = createSlice({
  name: "request",
  initialState: {},
  selectors: {
    selectRequestStatusById: (state, id) => state[id] || REQUEST_STATUS_IDLE,
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS_PENDING;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS_FULFILLED;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS_REJECTED;
        }
      ),
});

export const { selectRequestStatusById } = requestSlice.selectors;
