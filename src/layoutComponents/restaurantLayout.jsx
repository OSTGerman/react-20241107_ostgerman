import { Suspense } from "react";
import { RestaurantContainer } from "../components/restaurant/restaurantContainer";

export const RestaurantLayout = async ({ params, children }) => {
  const { restaurantId } = await params;
  return (
    <article>
      <Suspense fallback="Loading restaurant...">
        <RestaurantContainer id={restaurantId} />
      </Suspense>
      {children}
    </article>
  );
};
