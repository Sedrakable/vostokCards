import React, { useState } from "react";
import Shop from "../assets/illu/Cart.svg";

const Add2ShopCart = ({ items }) => {
  const handleClick = (e) => {
    items.onClick(e.target.value);
  };

  return (
    <a onClick={handleClick}>
      <img className="add2cart item_button" src={Shop} />
    </a>
  );
};

export default Add2ShopCart;
