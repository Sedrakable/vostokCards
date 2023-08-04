import React from "react";
import styles from "./DisplayContainer.module.scss";
import { Heading } from "../../reuse/Heading";
import { Paragraph } from "../../reuse/Paragraph";
import { Parallax } from "react-scroll-parallax";
import { ImageProps } from "../content/data.types";

export interface DisplayContainerProps {
  image: ImageProps;
  title: string;
  subtitle?: string;
}

export const DisplayContainer: React.FC<DisplayContainerProps> = ({
  image,
  title,
  subtitle,
}) => {
  return (
    <div className={styles.wrapper}>
      <Parallax speed={-15}>
        <img src={image?.src} alt={image?.alt} />
      </Parallax>
      <div className={styles.text}>
        <Heading as="h1" level="1" color="gold-grad" textAlign="center">
          {title}
        </Heading>
        {subtitle && (
          <Paragraph level="1" color="white" weight="regular">
            {subtitle}
          </Paragraph>
        )}
      </div>
    </div>
  );
};
