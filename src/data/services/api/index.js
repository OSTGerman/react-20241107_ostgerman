import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE } from "../../consts";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE }),
  tagTypes: ["review"],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
    }),
    getMenuByRestaurantId: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    getMenuItemById: builder.query({
      query: (menuItemId) => `/dish/${menuItemId}`,
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: () => {
        return [{ type: "review" }];
      },
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: () => {
        return [{ type: "review" }];
      },
    }),
    editReview: builder.mutation({
      query: ({ reviewId, review }) => ({
        url: `/review/${reviewId}`,
        method: "PATCH",
        body: review,
      }),
      invalidatesTags: () => {
        return [{ type: "review" }];
      },
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetMenuByRestaurantIdQuery,
  useGetMenuItemByIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useAddReviewMutation,
  useEditReviewMutation,
} = apiSlice;
