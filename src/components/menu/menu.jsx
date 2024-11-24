import { MenuItem } from "./menuItem";

export const Menu = ({ data: menu }) => {
  return (
    <>
      <h3>Menu</h3>
      <ul>
        {!menu?.length ? (
          <span>Call or visit for menu</span>
        ) : (
          menu.map((menuItem) => {
            const { id } = menuItem;
            return (
              <li key={id}>
                <MenuItem menuItem={menuItem} />
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};
