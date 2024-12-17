import { MenuItemCounterContainer } from "../menu/menuItemCounterContainer";

export const CartItem = ({ id, name }) => {
  return (
    <div>
      <span>{name}</span>
      <MenuItemCounterContainer id={id} />
    </div>
  );
};
