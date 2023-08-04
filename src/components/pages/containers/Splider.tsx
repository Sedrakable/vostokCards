import React, { useEffect, useRef, useState } from "react";
import {
  Options,
  Splide,
  SplideSlide,
  SplideTrack,
} from "@splidejs/react-splide";
import styles from "./Splider.module.scss";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import { SideContainer, SideContainerProps } from "./SideContainer";
import { ImageProps } from "../content/data.types";

export interface SpliderProps {
  image: ImageProps;
  content: SideContainerProps;
}

export const Splider: React.FC<{ spliders: SpliderProps[] }> = ({
  spliders,
}) => {
  const mainRef = useRef<Splide>(null);
  const thumbsRef = useRef<Splide>(null);
  const [splideProgress, setSplideProgress] = useState(0);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
      console.log(mainRef.current.splide);
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
    return spliders.map((splider: SpliderProps) => {
      return (
        <SplideSlide key={splider.image.src}>
          <img src={splider.image.src} alt={splider.image.alt} />
          {text && (
            //NEEDS TO BE REPLACED BY ALTUAL CONTENT
            <SideContainer {...splider.content} />
          )}
        </SplideSlide>
      );
    });
  };

  const mainOptions: Options = {
    type: "loop",
    autoplay: true,
    pagination: false,
    pauseOnHover: true,
    resetProgress: false,
    interval: 5000,
  };

  const thumbsOptions: Options = {
    type: "slide",
    rewind: true,
    gap: "1rem",
    pagination: false,
    fixedWidth: 110,
    fixedHeight: 70,
    cover: true,
    focus: "center",
    isNavigation: true,
    arrows: false,
  };

  return (
    <div className={styles.wrapper}>
      <Splide
        className={styles.container}
        options={mainOptions}
        hasTrack={false}
        ref={mainRef}
      >
        <SplideTrack>{renderSlides(true)}</SplideTrack>
      </Splide>

      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${splideProgress * 100}%` }}
        />
      </div>
      <Splide className={styles.thumbs} options={thumbsOptions} ref={thumbsRef}>
        {renderSlides(false)}
      </Splide>
    </div>
  );
};
