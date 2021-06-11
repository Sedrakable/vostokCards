import React from "react";

const TabButton = ({ addClass, children, href, parentCallback }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);
    console.log("/#" + href);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
    if (parentCallback != null) {
      parentCallback("");
    }
  };

  return (
    <a onClick={onClick} className={addClass} href={href}>
      {children}
    </a>
  );
};

export default TabButton;
