import { Link } from "react-router-dom";
import { useAuth } from "../authContext/useAuth";
import { MenuItemCounterContainer } from "./menuItemCounterContainer";

export const MenuItem = ({ menuItem }) => {
  const { isAuthorized } = useAuth();

  const { id, name } = menuItem;  

  return (
    <div>
      <Link to={`/dish/${id}`}>{name}</Link>
      {isAuthorized && <MenuItemCounterContainer id={id} />}
    </div>
  );
};
