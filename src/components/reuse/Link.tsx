import React, {
  PropsWithChildren,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";
import styles from "./Link.module.scss";
import cn from "classnames";

export interface LinkProps {
  children: string | ReactNode;
  href: string;
  className?: string;
}
export const Link: React.FC<PropsWithChildren<
  LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
>> = ({ children, href, className, ...props }) => {
  const as = props?.onClick ? "button" : "a";
  return React.createElement(
    as,
    { className: cn(styles.link, className), href, ...props },
    children
  );
};
