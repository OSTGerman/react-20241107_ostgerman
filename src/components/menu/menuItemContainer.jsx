import { useSelector } from "react-redux";
import { selectMenuItemById } from "../../data/entities/menu/menuSlice";
import { MenuItem } from "./menuItem";

export const MenuItemContainer = ({ id }) => {
  const menuItem = useSelector((state) => selectMenuItemById(state, id));

  if (!menuItem) {
    return null;
  }

  const { name } = menuItem;

  return <MenuItem id={id} name={name} />;
};
