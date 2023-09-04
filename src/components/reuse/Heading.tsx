import React from "react";
import styles from "./Heading.module.scss";
import cn from "classnames";

export type ColorType =
  | "white"
  | "black"
  | "gold"
  | "gold-grad"
  | "gold-light"
  | "grey"
  | "silver-grad"
  | "silver";

export const HeadingLevelArray = ["1", "2", "3", "4", "5", "6"] as const;

type HeadingLevelType = typeof HeadingLevelArray[number];

export const HeadingAsArray = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "span",
] as const;

type HeadingAsType = typeof HeadingAsArray[number];

type textAlign =
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "justify"
  | "match-parent";

export interface HeadingProps {
  children: string;
  level: HeadingLevelType;
  as: HeadingAsType;
  textAlign?: textAlign;
  color?: ColorType;
  upperCase?: boolean;
  capitalise?: boolean;
  clickable?: boolean;
}

export const capitalizeString = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const Heading: React.FC<HeadingProps> = ({
  children,
  level,
  as,
  textAlign,
  color = "white",
  upperCase = true,
  capitalise,
  clickable,
}) => {
  const CustomHeading = as as keyof JSX.IntrinsicElements;

  const finalString = upperCase
    ? children?.toUpperCase()
    : capitalise
    ? capitalizeString(children)
    : children;

  return (
    <CustomHeading
      className={cn(styles.heading, styles[`level${level}`], {
        [styles.gradient]: color.includes("grad"),
        [styles.clickable]: clickable,
      })}
      style={{ color: `var(--${color})`, textAlign }}
    >
      {finalString}
    </CustomHeading>
  );
};
