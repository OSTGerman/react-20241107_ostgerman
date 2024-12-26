import { RestaurantContainer } from "../components/restaurant/restaurantContainer";

export const RestaurantLayout = async ({ params, children }) => {
  const { restaurantId } = await params;
  return (
    <article>
      <RestaurantContainer id={restaurantId} />
      {children}
    </article>
  );
};
