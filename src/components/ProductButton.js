import React from "react";

const ProductButton = ({ href }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a className="text name learn" onClick={onClick} href={href}>
      Learn More
    </a>
  );
};

export default ProductButton;
