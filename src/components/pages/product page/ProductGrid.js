import React from "react";
import ProductButton from "./ProductButton";

const ProductsGrid = ({ items }) => {
  const renderItems = items.map((item) => {
    return (
      <div key={item.name} className="item black_back">
        <ProductButton item={item} />

        <div className="item_buttons">
          <div className="text price item_button ">${item.price}</div>
        </div>
      </div>
    );
  });

  return <div className="product_grid brown_back">{renderItems}</div>;
};

export default ProductsGrid;
