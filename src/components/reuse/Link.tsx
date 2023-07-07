import React, { ReactNode } from "react";
import styles from "./Link.module.scss";

export const Link: React.FC<{
  children: string | ReactNode;
  href: string;
}> = ({ children, href }) => {
  return (
    <a className={styles.link} href={href}>
      {children}
    </a>
  );
};
