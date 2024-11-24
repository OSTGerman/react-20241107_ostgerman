import { useState } from "react";

export const TabControl = ({ items, headerFunc, keyFunc, contentFunc }) => {
  const [curItem, setCurItem] = useState(items[0]);

  return (
    <>
      <nav>
        <ul>
          {items.map((item) => {
            return (
              <li key={keyFunc(item)}>
                <button
                  disabled={item === curItem}
                  onClick={() => setCurItem(item)}
                >
                  {headerFunc(item)}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div>{contentFunc(curItem)}</div>
    </>
  );
};
