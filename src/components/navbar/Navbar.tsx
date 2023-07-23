import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.scss";
import TabButton from "./TabButton";
import { Icon } from "../reuse/Icon";
import { useWindowResize } from "../../helpers/useWindowResize";
import { IconButton } from "../reuse/IconButton";
import { Line } from "../reuse/Line";
import { EmailList } from "../pages/contact page/EmailList";
import { FollowUs } from "../footer/FollowUs";
import cn from "classnames";
const logo = require("../../assets/photos/Logo_simple.png");

export const tabTexts: string[] = ["news", "products", "about", "contact"];

export const Navbar = () => {
  const { isMobile } = useWindowResize();
  const [sidebar, setSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = navRef?.current?.clientHeight!;
      const isScrolled = window.scrollY > offset;
      setScrolled(isScrolled);
    };
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navRef]);

  const logoComp = <img src={logo} alt="logo" className={styles.logo} />;

  const tabs = (isMobile: boolean = false) =>
    tabTexts.map((tabText) => {
      return (
        <>
          <div className={styles.tabWrapper}>
            <TabButton className={styles.tab} href={`/${tabText}`}>
              {tabText}
            </TabButton>
            {isMobile && <Icon icon="arrow" size="extra-small" color="white" />}
          </div>
          {isMobile && <Line color="black" />}
        </>
      );
    });

  return (
    <div className={styles.menu}>
      <div
        className={cn(styles.navbar, { [styles.scrolled]: scrolled })}
        ref={navRef}
      >
        {isMobile ? (
          <>
            <div className={styles.left}>
              <IconButton
                onClick={() => setSidebar(true)}
                iconProps={{ icon: "burger", color: "gold", size: "small" }}
              />
            </div>
            <div className={styles.middle}>{logoComp}</div>
          </>
        ) : (
          <div className={styles.middle}>
            {tabs()}
            {logoComp}
          </div>
        )}
      </div>
      {isMobile && (
        <div className={cn(styles.sidebar, { [styles.isOpen]: sidebar })}>
          <div className={styles.tab}>
            <IconButton
              onClick={() => setSidebar(false)}
              iconProps={{ icon: "close", color: "gold", size: "small" }}
            />
          </div>

          <div className={styles.tabs}>
            <>
              {tabs(isMobile)}
              <div className={styles.emailList}>
                <EmailList />
              </div>
              <div className={styles.followUs}>
                <FollowUs />
              </div>
            </>
          </div>
        </div>
      )}
    </div>
  );
};
