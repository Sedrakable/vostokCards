import React from "react";
import ProductGrid from "./ProductGrid";
import "../../../css/Products.css";
import Header from "../all page stuff/Header";
import { PageItemsType } from "../../App";

const header = {
  title: "Products",
  desc: "Amazing decks that push the bounderies of awesomeness",
};

const Products: React.FC<{ items: PageItemsType[] }> = ({ items }) => {
  return (
    <div className="page">
      <Header title={header.title} description={header.desc} />
      <ProductGrid items={items} />
    </div>
  );
};

export default Products;
