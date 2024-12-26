"use client";

import { Reviews } from "./reviews";
import { useAuth } from "../authContext/useAuth";
import { ReviewForm } from "./reviewForm";
import {
  useAddReviewMutation,
  useGetReviewsByRestaurantIdQuery,
} from "../../data/services/api";
import { QueryStatusAware } from "../queryStatusAware/queryStatusAware";

export const ReviewsContainer = ({ restaurantId }) => {
  const { isAuthorized } = useAuth();

  const getQuery = useGetReviewsByRestaurantIdQuery(restaurantId);

  const [addReview, addQuery] = useAddReviewMutation();

  const { data: reviews } = getQuery;

  return (
    <>
      <QueryStatusAware query={getQuery}>
        <Reviews data={reviews} />
      </QueryStatusAware>
      {isAuthorized && (
        <QueryStatusAware query={addQuery}>
          <ReviewForm
            submit={(review) => {
              addReview({ restaurantId, review });
            }}
          />
        </QueryStatusAware>
      )}
    </>
  );
};
