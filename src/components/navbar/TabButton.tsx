import React, { ReactNode } from "react";

const TabButton: React.FC<{
  addClass?: string;
  children: ReactNode;
  href: string;
}> = ({ addClass, children, href }) => {
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
    <a onClick={onClick} className={addClass} href={href}>
      {children}
    </a>
  );
};

export default TabButton;
