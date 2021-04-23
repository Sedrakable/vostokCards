import React, { useState } from "react";
import Navbar from "./Navbar";
import NewBox from "./NewBox";
import Route from "./Route";
import Products from "./Products";
import Cart from "./Cart";
import ProductPage from "./ProductPage";
import "../css/NewBox.css";

import image_1 from "../assets/photos/cards 1.jpg";
import image_2 from "../assets/photos/cards 2.jpg";
import image_3 from "../assets/photos/cards 3.jpg";
import image_4 from "../assets/photos/cards 4.jpg";
import Title from "../assets/illu/Title.svg";

const items = [
  {
    name: "Animal Gangdom",
    price: 6.99,
    image: image_1,
    path: "/products/animal_gangdom",
    logo: (
      <div className="Title">
        <img className="logo_image" src={Title} />
      </div>
    ),
  },
  {
    name: "Greek Gods",
    price: 19.99,
    image: image_2,
    path: "/products/greek_gods",
  },
  {
    name: "Anchient Civs",
    price: 8.99,
    image: image_3,
    path: "/products/anchient_civs",
  },
  {
    name: "Anchient Civs 2",
    price: 12.99,
    image: image_4,
    path: "/products/anchient_civs_2",
  },
];

const App = () => {
  const renderedLinks = items.map((item) => {
    return (
      <Route path={item.path}>
        <ProductPage item={item} />
      </Route>
    );
  });

  return (
    <div>
      <Navbar />
      <Route path="/">
        <NewBox />
      </Route>

      <Route path="/products">
        <Products items={items} />
      </Route>

      {renderedLinks}
    </div>
  );
};

export default App;
