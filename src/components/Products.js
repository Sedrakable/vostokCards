import React from "react";
import ProductGrid from "./ProductGrid";
import "../css/Products.css";

const Products = ({ items }) => {
  return (
    <div className="Products">
      <h1 className="pageTitle">Products</h1>
      <h1 className="pageDescription">
        Amazing decks that push the bounderies of awesomeness
      </h1>
      <ProductGrid items={items} />
    </div>
  );
};

export default Products;
