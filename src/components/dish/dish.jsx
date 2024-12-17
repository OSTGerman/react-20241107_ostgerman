import { useAuth } from "../authContext/useAuth";
import { MenuItemCounterContainer } from "../menu/menuItemCounterContainer";

export const DishItem = ({ dish }) => {
  const { isAuthorized } = useAuth();

  const { id, name, ingredients } = dish;

  return (
    <article>
      <h2>{name}</h2>
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
