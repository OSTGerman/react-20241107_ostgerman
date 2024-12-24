import { useGetRestaurantsQuery } from "../../data/services/api";
import { QueryStatusAware } from "../queryStatusAware/queryStatusAware";
import { Restaurant } from "./restaurant";

export const RestaurantContainer = ({ id }) => {
  const query = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id: restaurantId }) => restaurantId === id),
    }),
  });

  const { data: restaurant } = query;

  return (
    <QueryStatusAware query={query}>
      <Restaurant restaurant={restaurant} />
    </QueryStatusAware>
  );
};
