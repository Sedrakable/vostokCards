import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { ProductsPage } from "./pages/Item/ProductsPage";
import {
  CollectionPage,
  CollectionType,
} from "./pages/collections/CollectionPage";
import NewsPage from "./pages/news page/NewsPage";
import AboutPage from "./pages/about page/AboutPage";
import ContactPage from "./pages/contact page/ContactPage";
import styles from "./App.module.scss";
import "../css/Main.css";
import "../css/ScrollBar.scss";

// import image_5 from "../assets/photos/AG_5.jpg";
// import image_6 from "../assets/photos/AG_6.jpg";
// import image_7 from "../assets/photos/AG_7.jpg";
import { Splider } from "./pages/containers/Splider";
import Footer from "./footer/Footer";
import { DisplayContainer } from "./pages/containers/DisplayContainer";
import {
  homepageSpliderData,
  displayData,
  collectionItems,
} from "./pages/content/data";
import { CollectionsPage } from "./pages/collections/CollectionsPage";
import { ItemGridProps } from "./pages/Item/ItemGrid";
import { ItemProps } from "./pages/Item/Item";

const App = () => {
  const mainPage = () => {
    return (
      <>
        <Splider spliders={homepageSpliderData} />
        <DisplayContainer {...displayData} />
      </>
    );
  };

  const aboutPage = () => {
    return <AboutPage />;
  };

  const renderedLinks = collectionItems.map((collection) => {
    return (
      <Route
        path={collection.path}
        component={() => <CollectionPage collection={collection} />}
      />
    );
  });

  const items: ItemProps[] = collectionItems.map(
    (item: CollectionType): ItemProps => {
      return {
        name: item?.name,
        image: item?.thumbnailImage,
        description: item?.description,
        columns: item?.columns,
        path: item?.path,
        price: 0,
      };
    }
  );
  const collection: ItemGridProps = {
    items: items,
    commingSoon: true,
  };
  return (
    <div className={styles.wholePage}>
      <Navbar />

      <BrowserRouter>
        <div>
          {renderedLinks}
          <Route path="/" exact component={mainPage} />
          <Route
            path="/collections"
            component={() => <CollectionsPage collections={collection} />}
          />
          <Route path="/about" component={aboutPage} />
          <Route path="/contact" component={() => <ContactPage />} />
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;
