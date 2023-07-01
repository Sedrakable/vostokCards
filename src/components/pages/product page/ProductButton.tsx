import React from "react";
import { PageItemsType } from "../../App";

const ProductButton: React.FC<{ item: PageItemsType }> = ({ item }) => {
  const onClick = (event: any) => {
    if (item.clickable === false) {
      return;
    }
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", item.path);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <React.Fragment>
      {item.clickable ? (
        <a className="image_wrapper border" onClick={onClick} href={item.path}>
          <img className="product_image" src={item.image} />
          <div className="text name toTop gold_back black_text">
            {item.name}
          </div>
        </a>
      ) : (
        <div className="image_wrapper border">
          <img className="product_image" src={item.image} />
          <div className="text name toTop red_back black_text">{item.name}</div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ProductButton;
