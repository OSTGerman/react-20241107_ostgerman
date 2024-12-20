import { useParams } from "react-router-dom";
import { ReviewsContainer } from "../review/reviewsContainer";

export const ReviewsPage = () => {
  const { restaurantId } = useParams();

  return <ReviewsContainer restaurantId={restaurantId} />;
};
