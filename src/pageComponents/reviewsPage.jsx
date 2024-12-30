import { Suspense } from "react";
import { ReviewsContainer } from "../components/review/reviewsContainer";

export const ReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;

  return (
    <Suspense fallback="Loading reviews...">
      <ReviewsContainer restaurantId={restaurantId} />
    </Suspense>
  );
};

export default ReviewsPage;
