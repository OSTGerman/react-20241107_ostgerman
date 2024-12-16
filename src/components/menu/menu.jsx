import { MenuItemContainer } from "./menuItemContainer";

export const Menu = ({ data: menuIds }) => {
  return (
    <>
      <h3>Menu</h3>
      <ul>
        {!menuIds?.length ? (
          <span>Call or visit for menu</span>
        ) : (
          menuIds.map((id) => {
            return (
              <li key={id}>
                <MenuItemContainer id={id} />
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};
