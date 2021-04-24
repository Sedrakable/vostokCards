import React from "react";
import ProductButton from "./ProductButton";

const ProductsGrid = ({ items }) => {
  const renderItems = items.map((item) => {
    return (
      <div key={item.name} className="Item black_back">
        <div className="image_wrapper border">
          <img className="product_image" src={item.image} />
          <div className="text name toTop ">{item.name}</div>
          <ProductButton href={item.path} />
        </div>

        <div className="item_buttons">
          <div className="text price item_button">${item.price}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="ProductGrid brown_back border_hori">{renderItems}</div>
  );
};

export default ProductsGrid;
