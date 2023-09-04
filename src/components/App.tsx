import React, { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { Modal, modalData } from "./reuse/Modal";
import { useAtom } from "jotai";
import {
  CollectionPage,
  CollectionType,
} from "./pages/collections/CollectionPage";
import { About } from "./pages/about page/About";
import ContactPage from "./pages/contact page/ContactPage";
import styles from "./App.module.scss";
import "../css/Main.css";
import "../css/scrollBar.scss";

import { Splider } from "./pages/containers/Splider";
import Footer from "./footer/Footer";
import { DisplayContainer } from "./pages/containers/DisplayContainer";
import {
  homepageSpliderData,
  displayData,
  collectionItems,
} from "./pages/content/data";
import { CollectionsPage } from "./pages/collections/CollectionsPage";
import { ItemGrid, ItemGridProps } from "./pages/Item/ItemGrid";
import { ItemProps } from "./pages/Item/Item";
import { ProductsPage } from "./pages/Item/ProductsPage";
import { ScrollToTop } from "../helpers/ScrollToTop";

const App = () => {
  const ref = useRef<any>(null);
  const [modalOpen] = useAtom(modalData);

  const mainPage = () => {
    return (
      <div className={styles.homePage}>
        <Splider slides={homepageSpliderData} />
        <DisplayContainer {...displayData} />
        <ItemGrid {...collections} title="Collections" />
      </div>
    );
  };

  const renderedLinks: React.ReactElement[] = collectionItems.map(
    (collection, key) => {
      return (
        <Route
          key={key}
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
    <div className={styles.wholePage} ref={ref}>
      <Navbar />
      {modalOpen && <Modal {...modalOpen} />}
      <BrowserRouter>
        <ScrollToTop />
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;
