import { useParams } from "react-router-dom";
import { MenuContainer } from "../menu/menuContainer";

export const MenuPage = () => {
  const { restaurantId } = useParams();
  return <MenuContainer restaurantId={restaurantId} />;
};
