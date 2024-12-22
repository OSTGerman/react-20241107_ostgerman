import styles from "./cart.module.css";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../data/entities/cart/cartSlice";
import { CartItemContainer } from "./cartItemContainer";

export const Cart = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <details className={styles.cart}>
      <summary>🛒</summary>
      <ul>
        {!cartItems?.length ? (
          <span>Cart is empty</span>
        ) : (
          cartItems.map(({ id }) => {
            return (
              <li key={id}>
                <CartItemContainer id={id} />
              </li>
            );
          })
        )}
      </ul>
    </details>
  );
};
