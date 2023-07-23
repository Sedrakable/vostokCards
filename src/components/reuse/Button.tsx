import React, { PropsWithChildren, ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";
import { Heading } from "./Heading";

export interface ButtonProps {
  children: string;
  variant: "primary" | "secondary";
}
export const Button: FC<PropsWithChildren<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
>> = ({ children, variant, ...props }) => {
  return (
    <button className={cn(styles.button, styles[variant])} {...props}>
      <Heading
        level="4"
        as="h4"
        color={variant === "primary" ? "white" : "gold-grad"}
      >
        {children}
      </Heading>
    </button>
  );
};
