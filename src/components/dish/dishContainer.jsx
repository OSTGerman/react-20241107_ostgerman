import { DishItem } from "./dish";
import { getMenuItemById } from "../../data/services/getMenuItemById";

export const DishContainer = async ({ id }) => {
  const dish = await getMenuItemById(id);

  return <DishItem dish={dish} />;
};
