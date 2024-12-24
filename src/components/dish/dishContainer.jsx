import { DishItem } from "./dish";
import { useGetMenuItemByIdQuery } from "../../data/services/api";
import { QueryStatusAware } from "../queryStatusAware/queryStatusAware";

export const DishContainer = ({ id }) => {
  const query = useGetMenuItemByIdQuery(id);

  const { data: dish } = query;

  return (
    <QueryStatusAware query={query}>
      <DishItem dish={dish} />
    </QueryStatusAware>
  );
};
