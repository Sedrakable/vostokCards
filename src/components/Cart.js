import React from "react";
import CartGrid from "./CartGrid";

const Cart = () => {
  return (
    <div className="Products">
      <h1 className="pageTitle">Cart</h1>
      <h1 className="pageDescription">All of your amazing decks are here</h1>
      <CartGrid />
    </div>
  );
};

export default Cart;
