import { Suspense } from "react";
import { RestaurantsContainer } from "../components/restaurant/restaurantsContainer";

export const RestaurantsLayout = async ({ children }) => {
  return (
    <>
      <Suspense fallback="Loading restaurants...">
        <RestaurantsContainer />
      </Suspense>
      {children}
    </>
  );
};
