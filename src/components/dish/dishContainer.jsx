import { useSelector } from "react-redux";
import { selectMenuItemById } from "../../data/entities/menu/menuSlice";
import { DishItem } from "./dish";
import { useRequest } from "../../data/hooks/useRequest";
import { getMenuItemById } from "../../data/entities/menu/getMenuItemById";
import { RequestStatusAware } from "../requestStatusAware/requestStatusAware";

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectMenuItemById(state, id));

  const requestStatus = useRequest(getMenuItemById, id);

  return (
    <RequestStatusAware requestStatus={requestStatus}>
      <DishItem dish={dish} />
    </RequestStatusAware>
  );
};
