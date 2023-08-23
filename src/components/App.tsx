import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import { ProductsPage } from "./pages/Item/ProductsPage";

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

  const renderedLinks: React.ReactElement[] = collectionItems.map(
    (collection) => {
      return (
        <Route
          path={collection.path}
          element={<CollectionPage collection={collection} />}
        />
      );
    }
  );

  const PG: ItemGridProps[] = collectionItems.map(
    (collection: CollectionType): ItemGridProps => {
      return { title: collection.name, items: collection.items };
    }
  );

  const CI: ItemProps[] = collectionItems.map(
    (collection: CollectionType): ItemProps => {
      const { name, thumbnailImage, description, path, columns } = collection;
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
  const collections: ItemGridProps = {
    items: CI,
    commingSoon: true,
  };
  return (
    <div className={styles.wholePage}>
      <Navbar />
      {modalOpen && <Modal {...modalOpen} />}
      <BrowserRouter>
        <Routes>
          {renderedLinks}
          <Route path="/" element={mainPage()} />
          <Route
            path="/products"
            element={<ProductsPage productGrids={PG} />}
          />
          <Route
            path="/collections"
            element={<CollectionsPage collections={collections} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;
