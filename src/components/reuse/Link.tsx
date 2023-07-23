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
  return (
    <a className={cn(styles.link, className)} href={href} {...props}>
      {children}
    </a>
  );
};
