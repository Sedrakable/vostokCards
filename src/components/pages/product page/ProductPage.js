import React from "react";
import "../../../css/ProductPage.css";
import ProductBox from "./ProductBox";

const ProductPage = ({ item }) => {
  const items = [
    {
      logo: item.logo,
      side: "title",
      image: item.image[0],
      text: item.text[0],
    },
    {
      logo: null,
      side: "right",
      image: item.image[1],
      text: item.text[1],
    },
    {
      logo: null,
      side: "left",
      image: item.image[2],
      text: item.text[2],
    },
    {
      logo: null,
      side: "right",
      image: item.image[3],
      text: item.text[3],
    },
    {
      logo: null,
      side: "album",
      image: null,
      text: null,
    },
  ];

  const renderItems = items.map((item) => {
    return <ProductBox item={item}></ProductBox>;
  });

  return (
    <div className="page">
      <h1 className="page_title">{item.name}</h1>
      {renderItems}
    </div>
  );
};

export default ProductPage;
