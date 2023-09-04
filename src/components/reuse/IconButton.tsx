import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./IconButton.module.scss";
import cn from "classnames";
import { Icon, IconProps } from "./Icon";

export interface IconButtonProps {
  iconProps: IconProps;
}
export const IconButton: FC<
  IconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ iconProps, ...props }) => {
  return (
    <button className={cn(styles.button)} {...props}>
      <Icon {...iconProps} />
    </button>
  );
};
