import React from "react";
import { Heading } from "../reuse/Heading";
import { Link } from "../reuse/Link";

const TabButton: React.FC<{
  children: string;
  href: string;
}> = ({ children, href }) => {
  const onClick = (event: any) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);
    console.log("/#" + href);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <Link href={href}>
      <Heading>{children}</Heading>
    </Link>
  );
};

export default TabButton;
