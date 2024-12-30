import { Reviews } from "./reviews";
import { getReviewsByRestaurantId } from "../../data/services/getReviewsByRestaurantId";
import { ReviewFormContainer } from "./reviewFormContainer";
import { getUsers } from "../../data/services/getUsers";

export const ReviewsContainer = async ({ restaurantId }) => {
  const reviews = await getReviewsByRestaurantId(restaurantId);
  const users = await getUsers();

  return (
    <>
      <Reviews data={reviews} users={users} />
      <ReviewFormContainer restaurantId={restaurantId} />
    </>
  );
};
