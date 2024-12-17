import { useSelector } from "react-redux";
import { selectMenuItemById } from "../../data/slices/menuSlice";
import { DishItem } from "./dish";

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectMenuItemById(state, id));

  return <DishItem dish={dish} />;
};
