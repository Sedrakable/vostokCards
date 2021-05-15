import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import NewBox from "./pages/home page/NewBox";
import Route from "./navbar/Route";
import Products from "./pages/product page/Products";
import ProductPage from "./pages/product page/ProductPage";
import NewsPage from "./pages/news page/NewsPage";
import AboutPage from "./pages/about page/AboutPage";
import "../css/NewBox.css";
import "../css/Main.css";

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

      <Route path="/news">
        <NewsPage />
      </Route>

      <Route path="/products">
        <Products items={items} />
      </Route>

      <Route path="/about">
        <AboutPage items={items} />
      </Route>

      {renderedLinks}
    </div>
  );
};

export default App;
