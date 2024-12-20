import { useSelector } from "react-redux";
import { selectMenuItemById } from "../../data/slices/menuSlice";
import { MenuItem } from "./menuItem";

export const MenuItemContainer = ({ id }) => {
  const menuItem = useSelector((state) => selectMenuItemById(state, id));
  const { name } = menuItem;

  return <MenuItem id={id} name={name} />;
};
