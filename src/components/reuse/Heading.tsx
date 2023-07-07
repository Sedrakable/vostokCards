import React from "react";
import styles from "./Heading.module.scss";

type colorType = "white" | "black";

export const Heading: React.FC<{
  children: string;
  color?: colorType;
}> = ({ children, color = "white" }) => {
  return (
    <h1 className={styles.heading} style={{ color: `var(--${color})` }}>
      {children}
    </h1>
  );
};
