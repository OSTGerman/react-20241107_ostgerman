"use client";

import { CartItem } from "./cartItem";
import { getMenuItemById } from "../../data/services/getMenuItemById";
import { useEffect, useState } from "react";

export const CartItemContainer = ({ id }) => {
  const [menuItem, setMenuItem] = useState();

  useEffect(() => {
    const fetchMenuItem = async () => {
      const data = await getMenuItemById(id);
      setMenuItem(data);
    };
    fetchMenuItem();
  }, [id]);

  if (!menuItem) {
    return "Loading item...";
  }
  return <CartItem menuItem={menuItem} />;
};
