import { getRestaurantById } from "../../data/entities/restaurant/getRestaurantById";
import { selectRestaurantById } from "../../data/entities/restaurant/restaurantSlice";
import { RequestStatusAware } from "../requestStatusAware/requestStatusAware";
import { Restaurant } from "./restaurant";
import { useSelector } from "react-redux";

export const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const requestStatus = getRestaurantById(id);

  return (
    <RequestStatusAware requestStatus={requestStatus}>
      <Restaurant restaurant={restaurant} />
    </RequestStatusAware>
  );
};
