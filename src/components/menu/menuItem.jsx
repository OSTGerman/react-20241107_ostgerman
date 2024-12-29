"use client";

import Link from "next/link";
import { useAuth } from "../authContext/useAuth";
import { MenuItemCounterContainer } from "./menuItemCounterContainer";

export const MenuItem = ({ menuItem }) => {
  const { isAuthorized } = useAuth();

  const { id, name } = menuItem;

  return (
    <div>
      <Link href={`/dish/${id}`}>{name}</Link>
      {isAuthorized && <MenuItemCounterContainer id={id} />}
    </div>
  );
};
