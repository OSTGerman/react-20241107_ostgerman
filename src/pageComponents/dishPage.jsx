import { DishContainer } from "../components/dish/dishContainer";

export const DishPage = async ({ params }) => {
  const { dishId } = await params;

  return <DishContainer id={dishId} />;
};
