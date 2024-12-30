import { Menu } from "./menu";
import { getMenuByRestaurantId } from "../../data/services/getMenuByRestaurantId";

export const MenuContainer = async ({ restaurantId }) => {
  const menu = await getMenuByRestaurantId(restaurantId);

  return <Menu data={menu} />;
};
