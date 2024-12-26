import { RestaurantsContainer } from "../components/restaurant/restaurantsContainer";

export const RestaurantsLayout = ({ children }) => {
  return (
    <>
      <RestaurantsContainer />
      {children}
    </>
  );
};
