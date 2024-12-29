import { ReviewsContainer } from "../components/review/reviewsContainer";

export const ReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;

  return <ReviewsContainer restaurantId={restaurantId} />;
};

export default ReviewsPage;
