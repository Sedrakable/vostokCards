import React from "react";

const TabButton = ({ addClass, children, href, parentCallback }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", process.env.PUBLIC_URL + href);
    console.log(process.env.PUBLIC_URL + href);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
    if (parentCallback != null) {
      parentCallback("");
    }
  };

  return (
    <a
      onClick={onClick}
      className={addClass}
      href={process.env.PUBLIC_URL + href}
    >
      {children}
    </a>
  );
};

export default TabButton;
