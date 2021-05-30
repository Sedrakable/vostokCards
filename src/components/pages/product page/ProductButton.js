import React from "react";

const ProductButton = ({ item }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", item.path);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a className="image_wrapper border" onClick={onClick} href={item.path}>
      <img className="product_image" src={item.image} />
      <div className="text name toTop red_back black_text">{item.name}</div>
    </a>
  );
};

export default ProductButton;
