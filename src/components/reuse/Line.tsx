import React from "react";
import styles from "./Line.module.scss";
import { ColorType } from "./Heading";

interface LineProps {
  color?: ColorType;
}
export const Line: React.FC<LineProps> = ({ color = "white" }) => {
  return (
    <span
      className={styles.line}
      style={{ backgroundColor: `var(--${color})` }}
    />
  );
};
