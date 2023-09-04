import React from "react";
import { Item, ItemProps } from "./Item";
import styles from "./ItemGrid.module.scss";
import { Heading } from "../../reuse/Heading";
import { modalData } from "../../reuse/Modal";
import { useAtom } from "jotai";

const comingSoonImage = require("../../../assets/photos/ComingSoon.jpg");

export interface ItemGridProps {
  items: ItemProps[];
  title?: string;
  commingSoon?: boolean;
  openModalOnClick?: boolean;
}
export const ItemGrid: React.FC<ItemGridProps> = ({
  items,
  title,
  commingSoon = false,
  openModalOnClick = false,
}) => {
  const [, setModalOpen] = useAtom(modalData);

  const itemsOnClickOpenModal = (items: ItemProps[]): ItemProps[] => {
    return items.map((item) => {
      return {
        onClick: () =>
          setModalOpen({
            handleClose: () => setModalOpen(null),
            title: item?.name,
            description: item?.description,
            spliderData: item?.images
              ? item?.images!.map((image) => {
                  return {
                    image,
                  };
                })
              : [{ image: item.thumbnailImage }],
            ctas: item?.ctas,
          }),
        ...item,
      };
    });
  };

  const finalItems: ItemProps[] = openModalOnClick
    ? itemsOnClickOpenModal(items)
    : items;
  return (
    <div className={styles.gridWrapper}>
      {title && (
        <div className={styles.title}>
          <Heading as="h2" level="2" textAlign="center" color="gold-grad">
            {title}
          </Heading>
        </div>
      )}
      <div className={styles.productGrid}>
        {finalItems.map((item) => {
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
    </div>
  );
};
