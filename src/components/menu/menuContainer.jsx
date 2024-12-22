import { useSelector } from "react-redux";
import { Menu } from "./menu";
import { useRequest } from "../../data/hooks/useRequest";
import { getMenuByRestaurantId } from "../../data/entities/menu/getMenuByRestaurantId";
import { RequestStatusAware } from "../requestStatusAware/requestStatusAware";
import { selectRestaurantById } from "../../data/entities/restaurant/restaurantSlice";

export const MenuContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const requestStatus = useRequest(getMenuByRestaurantId, restaurantId);

  return (
    <RequestStatusAware requestStatus={requestStatus}>
      <Menu data={restaurant?.menu} />
    </RequestStatusAware>
  );
};
