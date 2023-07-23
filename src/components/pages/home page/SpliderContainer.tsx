import React from "react";
import styles from "./SpliderContainer.module.scss";
import { Heading } from "../../reuse/Heading";
import { Paragraph } from "../../reuse/Paragraph";
import { Button } from "../../reuse/Button";

export interface SpliderContainerProps {}

export const SpliderContainer: React.FC<SpliderContainerProps> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.text}>
          <Heading as="h2" level="2" color="gold-grad">
            Animal Gangdom
          </Heading>
          <Paragraph level="1" color="white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quod
            maxime pariatur aperiam! Quae eaque voluptate ducimus repudiandae et
            aliquid. Nihil quo quas harum eveniet accusamus.
          </Paragraph>
        </div>
        <Button variant="primary">Shop Now</Button>
      </div>
    </div>
  );
};
