import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import NewBox from "./pages/home page/NewBox";
import Products from "./pages/product page/Products";
import ProductPage from "./pages/product page/ProductPage";
import NewsPage from "./pages/news page/NewsPage";
import AboutPage from "./pages/about page/AboutPage";
import "../css/NewBox.css";
import "../css/Main.css";
import "../css/ScrollBar.css";

import image_1 from "../assets/photos/cards 1.jpg";
import image_2 from "../assets/photos/cards 2.jpg";
import image_3 from "../assets/photos/cards 3.jpg";
import image_4 from "../assets/photos/cards 4.jpg";
import Title from "../assets/illu/Title.svg";
import Background from "../assets/illu/Texture.svg";

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
  const MainPagee = () => {
    return <NewBox />;
  };

  const NewsPagee = () => {
    return <NewsPage />;
  };

  const ProductPagee = () => {
    return <Products items={items} />;
  };

  const AboutPagee = () => {
    return <AboutPage items={items} />;
  };

  const ProductsPages = (it) => {
    return <ProductPage item={it} />;
  };

  const renderedLinks = items.map((item) => {
    return (
      <Route path={item.path} component={() => <ProductPage item={item} />} />
    );
  });

  return (
    <div className="whole_page">
      <div className="background_image" />
      <Navbar />

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          {renderedLinks}
          <Route path="/" exact component={MainPagee} />
          <Route path="/news" component={NewsPagee} />
          <Route path="/about" component={AboutPagee} />
          <Route path="/products" component={ProductPagee} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
