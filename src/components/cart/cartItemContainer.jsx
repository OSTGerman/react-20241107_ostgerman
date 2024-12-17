import { useSelector } from "react-redux";
import { selectMenuItemById } from "../../data/slices/menuSlice";
import { CartItem } from "./cartItem";

export const CartItemContainer = ({ id }) => {
  const menuItem = useSelector((state) => selectMenuItemById(state, id));
  const { name } = menuItem;

  return <CartItem id={id} name={name} />;
};