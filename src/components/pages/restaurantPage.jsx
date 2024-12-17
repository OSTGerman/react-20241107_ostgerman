import { Outlet, useParams } from "react-router-dom";
import { RestaurantContainer } from "../restaurant/restaurantContainer";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  return (
    <article>
      <RestaurantContainer id={restaurantId} />
      <Outlet />
    </article>
  );
};
