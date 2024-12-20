import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../data/slices/restaurantSlice";
import { Menu } from "./menu";

export const MenuContainer = ({ restaurantId }) => {
  const { menu } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return <Menu data={menu} />;
};
