import React from "react";
import styles from "./Header.module.scss";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { Image, ImageProps } from "./Image";

export interface HeaderProps {
  title: string;
  description: string;
  image: ImageProps;
}
const Header: React.FC<HeaderProps> = ({ title, description, image }) => {
  return (
    <div className={styles.header}>
      <Image {...image} fit={false} />
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
