import { useSelector } from "react-redux";
import { selectMenuItemById } from "../../data/slices/menuSlice";
import { MenuItem } from "./menuItem";

export const MenuItemContainer = ({ id }) => {
  const menuItem = useSelector((state) => selectMenuItemById(state, id));
  const { name } = menuItem;

  console.log(name);

  return <MenuItem name={name} />;
};
