import React from "react";
import { Heading } from "../../reuse/Heading";
import styles from "./Story.module.scss";
import { Image, ImageProps } from "../../reuse/Image";
import { Paragraph } from "../../reuse/Paragraph";
import { useWindowResize } from "../../../helpers/useWindowResize";

export interface StoryType {
  image: ImageProps;
  name: string;
  description: string;
  imageSide?: "left" | "right";
}
export const Story: React.FC<StoryType> = ({
  image,
  name,
  description,
  imageSide = "left",
}) => {
  const { isMobileOrTablet } = useWindowResize();

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.imgWrapper}
        style={{ order: isMobileOrTablet ? 0 : imageSide === "left" ? 0 : 1 }}
      >
        <Image {...image} />
      </div>
      <div className={styles.text}>
        <Heading as="h2" level="2" color="gold-grad">
          {name}
        </Heading>
        <Paragraph level="2">{description}</Paragraph>
      </div>
    </div>
  );
};
