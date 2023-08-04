import React from "react";
import styles from "./Item.module.scss";
import { Link } from "../../reuse/Link";
import { Heading } from "../../reuse/Heading";
import { Paragraph } from "../../reuse/Paragraph";
import { useWindowResize } from "../../../helpers/useWindowResize";
import { onClickNavigate } from "../../../helpers/useNavigation";
import { ProductType } from "../content/data.types";

export interface ItemProps extends ProductType {
  columns?: 1 | 2;
}

export const Item: React.FC<ItemProps> = ({
  name,
  description,
  image,
  path,
  price,
  columns = 1,
}) => {
  const { isMobile } = useWindowResize();

  const productComp = (
    <div className={styles.wrapper}>
      <img {...image} alt={name} />
      <div className={styles.name}>
        <Heading as="h3" level="3" textAlign="center">
          {name}
        </Heading>
      </div>
      <div className={styles.hoverContainer}>
        <div className={styles.hoverName}>
          <Heading as="h4" level="4" color="gold">
            {name}
          </Heading>
          <Paragraph level="2">{description}</Paragraph>
        </div>
        {price > 0 && (
          <div className={styles.price}>
            <Heading as="h4" level="3" color="white" capitalise>
              {`${price}$`}
            </Heading>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {path ? (
        <Link
          onClick={(e) => onClickNavigate(e, path)}
          href={path}
          style={{ gridColumn: `span ${isMobile ? 1 : columns}` }}
        >
          {productComp}
        </Link>
      ) : (
        productComp
      )}
    </>
  );
};
