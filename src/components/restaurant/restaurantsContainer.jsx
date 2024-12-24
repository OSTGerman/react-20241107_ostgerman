import { TabControl } from "../tabs/tabControl";
import { useGetRestaurantsQuery } from "../../data/services/api";
import { QueryStatusAware } from "../queryStatusAware/queryStatusAware";

export const RestaurantsContainer = () => {
  const query = useGetRestaurantsQuery();

  const { data: restaurants } = query;

  return (
    <QueryStatusAware query={query}>
      <TabControl
        items={restaurants}
        headerFunc={({ name }) => name}
        keyFunc={({ id }) => id}
        toFunc={({ id }) => id}
      />
    </QueryStatusAware>
  );
};
