import React from "react";
import styles from "./Header.module.scss";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { ImageProps } from "../pages/content/data.types";

export interface HeaderProps {
  title: string;
  description: string;
  image: ImageProps;
}
const Header: React.FC<HeaderProps> = ({ title, description, image }) => {
  return (
    <div className={styles.header}>
      <img src={image.src} alt={image.alt} />
      <div className={styles.container}>
        <Heading as="h1" level="1" color="gold-grad">
          {title}
        </Heading>
        <Paragraph level="1" weight="regular">
          {description}
        </Paragraph>
      </div>
    </div>
  );
};

export default Header;
