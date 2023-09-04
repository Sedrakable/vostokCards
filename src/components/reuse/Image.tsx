import React, { ImgHTMLAttributes, PropsWithChildren } from "react";
import styles from "./Image.module.scss";
import cn from "classnames";
import { useWindowResize } from "../../helpers/useWindowResize";

export interface ImageProps {
  src: string;
  alt: string;
  fit?: boolean;
  mobileFit?: boolean;
}
export const Image: React.FC<PropsWithChildren<
  ImageProps & ImgHTMLAttributes<HTMLImageElement>
>> = ({ src, alt, fit, mobileFit, ...props }) => {
  const { isMobileOrTablet } = useWindowResize();

  return fit || (isMobileOrTablet && mobileFit) ? (
    <span {...props} className={cn(styles.wrapper, props.className)}>
      <img src={src} alt={alt} className={styles.blured} />
      <img src={src} alt={alt} style={{ objectFit: "contain" }} />
    </span>
  ) : (
    <img src={src} alt={alt} style={{ objectFit: "cover" }} {...props} />
  );
};
