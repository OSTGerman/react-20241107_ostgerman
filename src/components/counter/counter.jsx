import classNames from "classnames";
import styles from "./counter.module.css";

export const VARIANT_THUMB = "thumb";
export const VARIANT_DEFAULT = "default";

export const Counter = ({
  increment,
  decrement,
  value,
  variant = VARIANT_DEFAULT,
}) => {
  return (
    <div>
      <button
        className={classNames(styles.counterDecrement, {
          [styles.counterDecrement_default]: variant === VARIANT_DEFAULT,
          [styles.counterDecrement_thumb]: variant === VARIANT_THUMB,
        })}
        onClick={decrement}
      ></button>
      &nbsp;<strong>{value}</strong>&nbsp;
      <button
        className={classNames(styles.counterIncrement, {
          [styles.counterIncrement_default]: variant === VARIANT_DEFAULT,
          [styles.counterIncrement_thumb]: variant === VARIANT_THUMB,
        })}
        onClick={increment}
      ></button>
    </div>
  );
};
