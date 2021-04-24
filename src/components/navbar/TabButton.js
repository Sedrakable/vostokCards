import React, { useState } from "react";

const TabButton = ({ children, href }) => {
  const [tabClass, setTabClass] = useState("");

  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
    // setTabClass("red_back");
  };

  return (
    <a onClick={onClick} href={href}>
      {children}
    </a>
  );
};

export default TabButton;
