import { useState } from "react";

const selected = (element, selected) => {
  return selected ? <mark>{element}</mark> : element;
};

export const TabControl = ({ items, headerFunc, keyFunc, contentFunc }) => {
  const [curItem, setCurItem] = useState(items[0]);

  return (
    <>
      <nav>
        <ul>
          {items.map((item) => {
            return (
              <li key={keyFunc(item)}>
                {selected(
                  <a
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => setCurItem(item)}
                  >
                    {headerFunc(item)}
                  </a>,
                  item === curItem
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <div>{contentFunc(curItem)}</div>
    </>
  );
};
