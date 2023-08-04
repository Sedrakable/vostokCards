import React from "react";
import styles from "./DescriptionPannel.module.scss";
import { SideContainerProps, SideContainer } from "./SideContainer";
import { ImageProps } from "../content/data.types";

export interface DescriptionPannelProps {
  image: ImageProps;
  content: SideContainerProps;
}
export const DescriptionPannel: React.FC<DescriptionPannelProps> = ({
  image,
  content,
}) => {
  return (
    <div className={styles.wrapper}>
      <img src={image?.src} alt={image?.alt} />
      <SideContainer {...content} />
    </div>
  );
};
