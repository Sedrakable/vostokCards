import React from "react";
import { Item, ItemProps } from "./Item";
import styles from "./ItemGrid.module.scss";
import { Heading } from "../../reuse/Heading";
const comingSoonImage = require("../../../assets/photos/Sedrak.jpg");

export interface ItemGridProps {
  items: ItemProps[];
  title?: string;
  commingSoon?: boolean;
}
export const ItemGrid: React.FC<ItemGridProps> = ({
  items,
  title,
  commingSoon = "false",
}) => {
  return (
    <>
      {title && (
        <div className={styles.title}>
          <Heading as="h2" level="2" textAlign="center" color="gold-grad">
            Products
          </Heading>
        </div>
      )}
      <div className={styles.productGrid}>
        {items.map((item) => {
          return <Item {...item} key={item?.name} />;
        })}
        {commingSoon && (
          <Item
            thumbnailImage={{ src: comingSoonImage, alt: "" }}
            description=""
            name="Coming Soon"
            path=""
            price={0}
          />
        )}
      </div>
    </>
  );
};
