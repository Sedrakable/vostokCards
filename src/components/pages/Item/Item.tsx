import React from "react";
import styles from "./Item.module.scss";
import { Link } from "../../reuse/Link";
import { Heading } from "../../reuse/Heading";
import { Paragraph } from "../../reuse/Paragraph";
import { onClickNavigate } from "../../../helpers/useNavigation";
import { ProductType } from "../content/data.types";
import cn from "classnames";

export interface ItemProps extends ProductType {
  columns?: 1 | 2;
  onClick?: () => void;
}

export const Item: React.FC<ItemProps> = ({
  name,
  description,
  thumbnailImage,
  path,
  price,
  columns = 1,
  onClick,
}) => {
  const itemContent = (
    <>
      <img {...thumbnailImage} alt={name} />
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
        {price && price > 0 && (
          <div className={styles.price}>
            <Heading as="h4" level="3" color="white" capitalise>
              {`${price}$`}
            </Heading>
          </div>
        )}
      </div>
    </>
  );

  const onClickFunction = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    } else if (path) {
      return onClickNavigate(e, path);
    }
  };
  return path ? (
    <Link
      onClick={(e) => onClickFunction(e)}
      href={!onClick ? path : ""}
      className={cn(styles.wrapper, { [styles.doubleSpan]: columns === 2 })}
    >
      {itemContent}
    </Link>
  ) : (
    <div className={styles.wrapper}>{itemContent}</div>
  );
};
