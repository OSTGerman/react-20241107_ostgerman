import { MenuContainer } from "../components/menu/menuContainer";

export const MenuPage = async ({ params }) => {
  const { restaurantId } = await params;
  return <MenuContainer restaurantId={restaurantId} />;
};
