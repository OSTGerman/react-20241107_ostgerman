"use client";

import { useRouter } from "next/navigation";
import { editReview } from "../../data/services/editReview";
import { useAuth } from "../authContext/useAuth";
import { ReviewForm } from "./reviewForm";

export const ReviewFormContainer = ({ restaurantId, editedReview = null }) => {
  const { isAuthorized } = useAuth();

  const router = useRouter();

  if (!isAuthorized) {
    return null;
  }

  return (
    <ReviewForm
      review={editedReview}
      submit={async (review) => {
        await editReview(restaurantId, review, editedReview === null);
        router.refresh();
      }}
    />
  );
};
