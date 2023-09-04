import React from "react";
import { ItemGrid, ItemGridProps } from "./ItemGrid";
import styles from "./ProductsPage.module.scss";
import Header from "../../reuse/Header";
import { getRandomItemFromArray } from "../../../helpers/functions";
import { ItemProps } from "./Item";

const header = {
  title: "Products",
  desc: "Amazing decks that push the bounderies of awesomeness",
};

interface ProductsPageProps {
  productGrids: ItemGridProps[];
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ productGrids }) => {
  const randomGrid = getRandomItemFromArray(productGrids) as ItemGridProps;
  const img = (getRandomItemFromArray(randomGrid.items) as ItemProps)
    .thumbnailImage;

  return (
    <div className={styles.page}>
      <Header title={header.title} description={header.desc} image={img} />
      {productGrids.map((grid) => {
        return <ItemGrid {...grid} openModalOnClick />;
      })}
    </div>
  );
};
