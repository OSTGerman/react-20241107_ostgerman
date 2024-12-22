import { Outlet } from "react-router-dom";
import { RestaurantsContainer } from "../restaurant/restaurantsContainer";

export const RestaurantsPage = () => {
  return (
    <>
      <RestaurantsContainer />
      <Outlet />
    </>
  );
};
