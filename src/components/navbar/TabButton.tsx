import React from "react";
import { Heading } from "../reuse/Heading";
import { Link } from "../reuse/Link";
import styles from "./TabButton.module.scss";
import cn from "classnames";
import { onClickNavigate } from "../../helpers/useNavigation";

const TabButton: React.FC<{
  children: string;
  path: string;
  className?: string;
}> = ({ children, path, className }) => {
  return (
    <Link
      href={path}
      onClick={(e) => onClickNavigate(e, path)}
      className={cn(styles.tabButton, className)}
    >
      <Heading level="4" as="h4" color="gold" clickable>
        {children}
      </Heading>
    </Link>
  );
};

export default TabButton;
