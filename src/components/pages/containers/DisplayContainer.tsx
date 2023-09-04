import React from "react";
import styles from "./DisplayContainer.module.scss";
import { Heading } from "../../reuse/Heading";
import { Paragraph } from "../../reuse/Paragraph";
import { Parallax } from "react-scroll-parallax";
import { Image, ImageProps } from "../../reuse/Image";

export interface DisplayContainerProps {
  image: ImageProps;
  content?: {
    title: string;
    subtitle?: string;
  };
}

export const DisplayContainer: React.FC<DisplayContainerProps> = ({
  image,
  content,
}) => {
  const speed = -15;
  const scale = (100 - speed) / 100;
  return (
    <div className={styles.wrapper}>
      <Parallax
        speed={speed}
        scale={[scale, scale]}
        className={styles.parallax}
      >
        <Image {...image} />
      </Parallax>
      {content && (
        <div className={styles.text}>
          <Heading as="h1" level="1" color="gold-grad" textAlign="center">
            {content.title}
          </Heading>
          {content.subtitle && (
            <Paragraph
              level="1"
              color="white"
              weight="regular"
              textAlign="center"
            >
              {content.subtitle}
            </Paragraph>
          )}
        </div>
      )}
    </div>
  );
};
