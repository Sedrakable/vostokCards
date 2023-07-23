import React, { ReactNode } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import Products from "./pages/product page/Products";
import ProductPage from "./pages/product page/ProductPage";
import NewsPage from "./pages/news page/NewsPage";
import AboutPage from "./pages/about page/AboutPage";
import ContactPage from "./pages/contact page/ContactPage";
import styles from "./App.module.scss";
import "../css/Main.css";
import "../css/ScrollBar.scss";
import "../css/Header.css";

// import image_5 from "../assets/photos/AG_5.jpg";
// import image_6 from "../assets/photos/AG_6.jpg";
// import image_7 from "../assets/photos/AG_7.jpg";
import { ReactComponent as Title } from "../assets/illu/Title.svg";
import Background from "../assets/illu/Texture.svg";

import { EmailList } from "./pages/contact page/EmailList";
import { ImageProps, Splider } from "./pages/home page/Splider";
import Footer from "./footer/Footer";
const image_1 = require("../assets/photos/AG_1.jpg");
const image_2 = require("../assets/photos/AG_2.jpg");
const image_3 = require("../assets/photos/AG_3.jpg");
const image_4 = require("../assets/photos/AG_4.jpg");

export interface PageItemsType {
  name: string;
  price: number;
  image: string;
  path: string;
  logo?: ReactNode;
  clickable: boolean;
}

const pageItems: PageItemsType[] = [
  {
    name: "Animal Gangdom",
    price: 21.99,
    image: (image_1 as unknown) as string,
    path: "/products/animal_gangdom",
    logo: (
      <div className="Title">
        <Title />
      </div>
    ),
    clickable: true,
  },
  {
    name: "Comming Soon",
    price: 0,
    image: Background,
    path: "/products/CS",
    clickable: false,
  },
];

const mainPageSliderImages: ImageProps[] = [
  { src: image_1, alt: "image 1" },
  { src: image_2, alt: "image 2" },
  { src: image_3, alt: "image 3" },
  { src: image_4, alt: "image 4" },
];
const App = () => {
  const MainPagee = () => {
    return <Splider images={mainPageSliderImages} />;
  };

  const NewsPagee = () => {
    return <NewsPage />;
  };

  const ProductPagee = () => {
    return <Products items={pageItems} />;
  };

  const AboutPagee = () => {
    return <AboutPage />;
  };

  const ContactPagee = () => {
    return <ContactPage />;
  };

  const renderedLinks = pageItems.map((item) => {
    return (
      <Route path={item.path} component={() => <ProductPage item={item} />} />
    );
  });

  return (
    <div className={styles.wholePage}>
      <Navbar />

      <BrowserRouter>
        <div>
          {renderedLinks}
          <Route path="/" exact component={MainPagee} />
          <Route path="/news" component={NewsPagee} />
          <Route path="/about" component={AboutPagee} />
          <Route path="/products" component={ProductPagee} />
          <Route path="/contact" component={ContactPagee} />
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;
