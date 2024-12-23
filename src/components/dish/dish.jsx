import { useAuth } from "../authContext/useAuth";
import { MenuItemCounterContainer } from "../menu/menuItemCounterContainer";

export const DishItem = ({ dish }) => {
  const { isAuthorized } = useAuth();

  if (!dish) {
    return null;
  }

  const { id, name, ingredients, price } = dish;

  return (
    <article>
      <h2>
        {name} - ${price}
      </h2>
      <span>
        <em>Contains: </em>
      </span>
      <span>{ingredients.join(", ")}</span>
      {isAuthorized && (
        <>
          <hr />
          <span>I want some!</span> <MenuItemCounterContainer id={id} />
        </>
      )}
    </article>
  );
};
