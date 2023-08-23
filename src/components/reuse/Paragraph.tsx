import React from "react";
import styles from "./Paragraph.module.scss";
import cn from "classnames";
import { capitalizeString } from "./Heading";

type textAlign =
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "justify"
  | "match-parent";

export interface ParagraphProps {
  children: string;
  level: "1" | "2";
  textAlign?: textAlign;
  color?: "white" | "black";
  weight?: "weak" | "regular";
  capitalise?: boolean;
  clickable?: boolean;
  className?: string;
}

const fontWeights = {
  weak: 200,
  regular: 400,
};

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  level,
  textAlign,
  weight = "weak",
  color = "white",
  capitalise,
  clickable,
  className,
}) => {
  return (
    <p
      className={cn(
        styles.paragraph,
        styles[`level${level}`],
        {
          [styles.gradient]: color.includes("grad"),
          [styles.clickable]: clickable,
        },
        className
      )}
      style={{
        color: `var(--${color})`,
        textAlign,
        fontWeight: fontWeights[weight],
      }}
    >
      {capitalise ? capitalizeString(children) : children}
    </p>
  );
};
