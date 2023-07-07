import React, { ReactNode } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import NewBox from "./pages/home page/NewBox";
import Products from "./pages/product page/Products";
import ProductPage from "./pages/product page/ProductPage";
import NewsPage from "./pages/news page/NewsPage";
import AboutPage from "./pages/about page/AboutPage";
import ContactPage from "./pages/contact page/ContactPage";
import TabButton from "./navbar/TabButton";
import "../css/NewBox.css";
import "../css/Main.css";
import "../css/ScrollBar.css";
import "../css/Header.css";

// import image_5 from "../assets/photos/AG_5.jpg";
// import image_6 from "../assets/photos/AG_6.jpg";
// import image_7 from "../assets/photos/AG_7.jpg";
import { ReactComponent as Title } from "../assets/illu/Title.svg";
import Background from "../assets/illu/Texture.svg";
import image_1 from "../assets/photos/AG_1.jpg";
import image_2 from "../assets/photos/AG_2.jpg";
import image_3 from "../assets/photos/AG_3.jpg";
import image_4 from "../assets/photos/AG_4.jpg";

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
    image: image_1 as unknown as string,
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

const NewBoxItems: string[] = [
  image_1 as unknown as string,
  image_2 as unknown as string,
  image_3 as unknown as string,
  image_4 as unknown as string,
];

const HomePageTitle = (children: ReactNode) => {
  return (
    <div className="new_box_title flex_columb abs center_flex">
      {children}
      <TabButton href="/products/animal_gangdom">See Product</TabButton>
    </div>
  );
};

const App = () => {
  const MainPagee = () => {
    return <NewBox items={NewBoxItems}>{HomePageTitle(<Title />)}</NewBox>;
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
    <div className="whole_page">
      <Navbar />
      UNDER MAINTENANCE
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
    </div>
  );
};

export default App;
