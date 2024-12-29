"use client";

import classNames from "classnames";
import styles from "./tabItem.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const TabItem = ({ header, to, activeSegment }) => {
  const pathname = usePathname();

  return (
    <Link
      className={classNames(styles.tabItem, {
        [styles.selected]: pathname.includes(activeSegment),
      })}
      href={to}
    >
      {header}
    </Link>
  );
};
