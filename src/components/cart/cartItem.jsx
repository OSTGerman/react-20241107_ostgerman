import { MenuItemCounterContainer } from "../menu/menuItemCounterContainer";

export const CartItem = ({ menuItem }) => {
  if (!menuItem) {
    return null;
  }

  const { id, name } = menuItem;
  return (
    <div>
      <span>{name}</span>
      <MenuItemCounterContainer id={id} />
    </div>
  );
};
