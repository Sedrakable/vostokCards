import React from "react";
import { ItemGrid, ItemGridProps } from "../Item/ItemGrid";
import styles from "./CollectionsPage.module.scss";
import Header, { HeaderProps } from "../../reuse/Header";
import { getRandomItemFromArray } from "../../../helpers/functions";
import { ItemProps } from "../Item/Item";

export const CollectionsPage: React.FC<{
  collections: ItemGridProps;
}> = ({ collections }) => {
  //NEEDS to go into data file
  const header: HeaderProps = {
    title: "Collections",
    description: "Amazing decks that push the bounderies of awesomeness",
    image: (getRandomItemFromArray(collections.items) as ItemProps)
      .thumbnailImage,
  };

  return (
    <div className={styles.page}>
      <Header {...header} />
      <ItemGrid items={collections.items} commingSoon />
    </div>
  );
};
