import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../data/entities/restaurant/restaurantSlice";
import { RequestStatusAware } from "../requestStatusAware/requestStatusAware";
import { getReviewsByRestaurantId } from "../../data/entities/review/getReviewsByRestaurantId";
import { useRequest } from "../../data/hooks/useRequest";
import { Reviews } from "./reviews";
import { getUsers } from "../../data/entities/user/getUsers";
import { useAuth } from "../authContext/useAuth";
import { ReviewForm } from "./reviewForm";

export const ReviewsContainer = ({ restaurantId }) => {
  const { isAuthorized } = useAuth();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const requestStatusReviews = useRequest(
    getReviewsByRestaurantId,
    restaurantId
  );
  const requestStatusUsers = useRequest(getUsers);

  return (
    <>
      <RequestStatusAware requestStatus={requestStatusReviews}>
        <RequestStatusAware requestStatus={requestStatusUsers}>
          <Reviews data={restaurant?.reviews} />
        </RequestStatusAware>
      </RequestStatusAware>
      {isAuthorized && <ReviewForm />}
    </>
  );
};
