import { useParams } from "react-router-dom";
import { DishContainer } from "../dish/dishContainer";

export const DishPage = () => {
  const { dishId } = useParams();

  return <DishContainer id={dishId} />;
};
