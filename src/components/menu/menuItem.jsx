import { Counter } from "../counter/counter";

export const MenuItem = ({ menuItem }) => {
  const { name } = menuItem;
  return (
    <div>
      <span>{name}</span>
      <Counter min={0} max={5} cur={0} />
    </div>
  );
};
