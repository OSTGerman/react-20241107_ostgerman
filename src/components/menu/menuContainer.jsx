import { Menu } from "./menu";
import { useGetMenuByRestaurantIdQuery } from "../../data/services/api";
import { QueryStatusAware } from "../queryStatusAware/queryStatusAware";

export const MenuContainer = ({ restaurantId }) => {
  const query = useGetMenuByRestaurantIdQuery(restaurantId);

  const { data } = query;

  return (
    <QueryStatusAware query={query}>
      <Menu data={data} />
    </QueryStatusAware>
  );
};
