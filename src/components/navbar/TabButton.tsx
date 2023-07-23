import React from "react";
import { Heading } from "../reuse/Heading";
import { Link } from "../reuse/Link";
import styles from "./TabButton.module.scss";
import cn from "classnames";

const TabButton: React.FC<{
  children: string;
  href: string;
  className?: string;
}> = ({ children, href, className }) => {
  // const onClick = (event: any) => {
  //   if (event.metaKey || event.ctrlKey) {
  //     return;
  //   }
  //   event.preventDefault();
  //   window.history.pushState({}, "", href);
  //   console.log("/#" + href);
  //   const navEvent = new PopStateEvent("popstate");
  //   window.dispatchEvent(navEvent);
  // };

  return (
    <Link href={href} className={cn(styles.tabButton, className)}>
      <Heading level="4" as="h4" color="gold" clickable>
        {children}
      </Heading>
    </Link>
  );
};

export default TabButton;
