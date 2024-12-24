import { CartItem } from "./cartItem";
import { useGetMenuItemByIdQuery } from "../../data/services/api";
import { QueryStatusAware } from "../queryStatusAware/queryStatusAware";

export const CartItemContainer = ({ id }) => {
  const query = useGetMenuItemByIdQuery(id);
  const { data: menuItem } = query;

  return (
    <QueryStatusAware query={query}>
      <CartItem menuItem={menuItem} />
    </QueryStatusAware>
  );
};
