import React, { useEffect, useRef, useState } from "react";
import {
  Options,
  Splide,
  SplideSlide,
  SplideTrack,
} from "@splidejs/react-splide";
import styles from "./Splider.module.scss";
import "@splidejs/react-splide/css/skyblue";

import { SideContainer, SideContainerProps } from "./SideContainer";
import { Image, ImageProps } from "../../reuse/Image";
import cn from "classnames";

export interface SpliderProps {
  image: ImageProps;
  content?: SideContainerProps;
}

export interface SpliderContainerProps {
  slides: SpliderProps[];
  small?: boolean;
}

export const Splider: React.FC<SpliderContainerProps> = ({
  slides,
  small = false,
}) => {
  const mainRef = useRef<Splide>(null);
  const thumbsRef = useRef<Splide>(null);
  const [splideProgress, setSplideProgress] = useState(0);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  useEffect(() => {
    if (mainRef.current) {
      const splideInstance = mainRef.current.splide;

      if (splideInstance) {
        splideInstance.on("autoplay:playing", (progress) => {
          // console.log("Autoplay Progress:", progress);
          setSplideProgress(progress);
        });
      }
    }
  }, []);

  const renderSlides = (text: boolean) => {
    return slides.map((splider: SpliderProps, key) => {
      return (
        <SplideSlide key={key}>
          <Image {...splider.image} fit={text && splider.image.fit} />
          {text && splider?.content && (
            //NEEDS TO BE REPLACED BY ALTUAL CONTENT
            <SideContainer {...splider.content} />
          )}
        </SplideSlide>
      );
    });
  };

  const mainOptions: Options = {
    type: "loop",
    autoplay: !small,
    pagination: small,
    pauseOnHover: true,
    resetProgress: false,
    interval: 5000,
    arrows: slides.length > 1,
  };

  const thumbsOptions: Options = {
    type: "slide",
    rewind: true,
    gap: "1rem",
    pagination: false,
    cover: true,
    focus: "center",
    isNavigation: true,
    arrows: false,
  };

  return (
    <div className={cn(styles.wrapper, { [styles.small]: small })}>
      <Splide
        className={styles.container}
        options={mainOptions}
        hasTrack={false}
        ref={mainRef}
      >
        <SplideTrack>{renderSlides(true)}</SplideTrack>
      </Splide>

      {!small && (
        <>
          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{ width: `${splideProgress * 100}%` }}
            />
          </div>

          <Splide
            className={styles.thumbs}
            options={thumbsOptions}
            ref={thumbsRef}
          >
            {renderSlides(false)}
          </Splide>
        </>
      )}
    </div>
  );
};
