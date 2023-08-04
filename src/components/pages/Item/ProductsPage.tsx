import React from "react";
import { ItemGrid, ItemGridProps } from "./ItemGrid";
import styles from "./ProductsPage.module.scss";
import Header from "../../reuse/Header";
import { getRandomItemFromArray } from "../../../helpers/functions";

const header = {
  title: "Products",
  desc: "Amazing decks that push the bounderies of awesomeness",
};

export const ProductsPage: React.FC<{
  collections: ItemGridProps;
}> = ({ collections }) => {
  return (
    <div className={styles.page}>
      <Header
        title={header.title}
        description={header.desc}
        image={getRandomItemFromArray(collections.items).image}
      />
      <ItemGrid items={collections.items} />
    </div>
  );
};
