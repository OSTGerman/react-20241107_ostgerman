import { useAuth } from "../authContext/useAuth";
import { MenuItemCounterContainer } from "./menuItemCounterContainer";

export const MenuItem = ({ id, name }) => {

  const { isAuthorized } = useAuth();

  return (
    <div>
      <span>{name}</span>
      {isAuthorized && (
        <MenuItemCounterContainer id={id} />
      )}
    </div>
  );
};
