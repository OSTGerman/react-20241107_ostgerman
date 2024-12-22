import { useDispatch, useSelector } from "react-redux";
import {
  addMenuItemToCart,
  removeMenuItemFromCart,
  selectCartMenuItemCountById,
} from "../../data/entities/cart/cartSlice";
import { Counter } from "../counter/counter";

export const MenuItemCounterContainer = ({ id }) => {
  const itemCount = useSelector((state) =>
    selectCartMenuItemCountById(state, id)
  );

  const dispatch = useDispatch();

  return (
    <Counter
      value={itemCount}
      increment={() => dispatch(addMenuItemToCart(id))}
      decrement={() => dispatch(removeMenuItemFromCart(id))}
    />
  );
};
