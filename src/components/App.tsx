import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { Modal, modalData } from "./reuse/Modal";
import { useAtom } from "jotai";
import {
  CollectionPage,
  CollectionType,
} from "./pages/collections/CollectionPage";
import NewsPage from "./pages/news page/NewsPage";
import AboutPage from "./pages/about page/AboutPage";
import ContactPage from "./pages/contact page/ContactPage";
import styles from "./App.module.scss";
import "../css/Main.css";
import "../css/scrollBar.scss";

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
  const [modalOpen] = useAtom(modalData);

  const mainPage = () => {
    return (
      <>
        <Splider slides={homepageSpliderData} />
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
      const { name, thumbnailImage, description, path, columns } = item;
      return {
        name,
        thumbnailImage,
        description,
        columns,
        path,
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
      {modalOpen && <Modal {...modalOpen} />}
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
