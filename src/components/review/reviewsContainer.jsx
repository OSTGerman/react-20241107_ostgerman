import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../data/slices/restaurantSlice";
import { Reviews } from "./reviews";

export const ReviewsContainer = ({ restaurantId }) => {
  const { reviews } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return <Reviews data={reviews} />;
};
