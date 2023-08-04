import React, { PropsWithChildren, ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";
import { Heading } from "./Heading";
import { onClickNavigate } from "../../helpers/useNavigation";

export interface ButtonProps {
  children: string;
  variant: "primary" | "secondary";
  path?: string;
}
export const Button: FC<PropsWithChildren<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
>> = ({ children, variant, path, ...props }) => {
  const onClick = (e: React.MouseEvent) => {
    if (path) {
      return onClickNavigate(e, path);
    }

    return props.onClick;
  };
  return (
    <button
      className={cn(styles.button, styles[variant])}
      {...props}
      onClick={onClick}
    >
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
