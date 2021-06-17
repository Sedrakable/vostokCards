import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import NewBox from "./pages/home page/NewBox";
import Products from "./pages/product page/Products";
import ProductPage from "./pages/product page/ProductPage";
import NewsPage from "./pages/news page/NewsPage";
import AboutPage from "./pages/about page/AboutPage";
import TabButton from "./navbar/TabButton";
import "../css/NewBox.css";
import "../css/Main.css";
import "../css/ScrollBar.css";

import image_1 from "../assets/photos/AG_2.JPG";
import image_2 from "../assets/photos/AG_1.jpg";
import image_3 from "../assets/photos/AG_3.jpg";
import image_4 from "../assets/photos/AG_4.jpg";
import Title from "../assets/illu/Title.svg";
import Background from "../assets/illu/Texture.svg";

const AG_text = [
  "Check out and support our Kickstarter. Earlybirds get 10% off!",
  "Did you ever imagine a card where the jack of spades is in a tracksuit, has a ski mask on and not to mention is a wolf!? Well we certainly did… Every suit is associated with a different gang, from a different culture and a different animal kingdom. Every character has its own personality, while still keeping the traditional, simplistic look of a playing card. We wanted a product that could be used as a collectible, for cardistry, for magic and for playing games.",
  "We have chosen to print our designs on 310g German black core cards. Thus, each card contains an inner layer which helps the card remain straight after being twisted and bent, as well as making sure that one cannot see through the card. A good core to a card is what a good spine is to a human.In addition, the cards have an air-cushion finish, which in principle, are extremely small indentations on the finish of the card that pass particles of air in between them, which eases the manipulation of the deck during magic tricks and shuffling, giving the feeling of an “air-cushion” in-between the cards. Overall, these materials contribute to excellent flexibility and durability, making this deck perfectly suited not only for playing games, but also for cardistry and magic.",
  "The tuck box has a smooth black matte finish, with gold foil and embossing. From the front to the back, the sides and the opening flaps, the surface of the box is embroidered with intricate designs of the animal kingdom and the gang world. The gold foil and its reflections in different light conditions give the final touch contributing to the luxurious look of the deck, whereas the embossing gives a 3D feel when holding the box in your hands.",
];
const items = [
  {
    name: "Animal Gangdom",
    price: 21.99,
    image: [image_1, image_2, image_3, image_4],
    text: AG_text,
    path: "/products/animal_gangdom",
    logo: (
      <div className="Title">
        <img className="logo_image" src={Title} />
      </div>
    ),
    clickable: true,
  },
  {
    name: "Comming Soon",
    price: "?",
    image: Background,
    path: "/products/CS",
    clickable: false,
  },
];

const HomePageTitle = () => {
  return (
    <div className="new_box_title flex_columb abs center_flex">
      <img className="logo_image pad_16  brown_back border" src={Title} />
      <TabButton
        addClass={"new_box_button text black_text gold_back pad_8"}
        href="/products/animal_gangdom"
      >
        See Product
      </TabButton>
    </div>
  );
};
const App = () => {
  const MainPagee = () => {
    return (
      <NewBox>
        <div className="new_box_title flex_columb abs center_flex">
          <img className="logo_image pad_16  brown_back border" src={Title} />
          <TabButton
            addClass={"new_box_button text black_text gold_back pad_8"}
            href="/products/animal_gangdom"
          >
            See Product
          </TabButton>
        </div>
      </NewBox>
    );
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
      {/* <div className="background_image" /> */}
      <Navbar />

      <BrowserRouter>
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
