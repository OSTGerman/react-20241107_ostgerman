import { Menu } from "../menu/menu";
import { Reviews } from "../review/review";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;
  return (
    <article>
      <h2>{name}</h2>
      <Menu data={menu} />
      <Reviews data={reviews} />
    </article>
  );
};
