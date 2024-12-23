import { useSelector } from "react-redux";
import { useRequest } from "../../data/hooks/useRequest";
import { getRestaurants } from "../../data/entities/restaurant/getRestaurants";
import { selectRestaurants } from "../../data/entities/restaurant/restaurantSlice";
import { TabControl } from "../tabs/tabControl";
import { RequestStatusAware } from "../requestStatusAware/requestStatusAware";

export const RestaurantsContainer = () => {
  const restaurants = useSelector(selectRestaurants);

  const requestStatus = useRequest(getRestaurants);

  return (
    <>
      <RequestStatusAware requestStatus={requestStatus}>
        <TabControl
          items={restaurants}
          headerFunc={({ name }) => name}
          keyFunc={({ id }) => id}
          toFunc={({ id }) => id}
        />
      </RequestStatusAware>
    </>
  );
};
