import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.scss";
import TabButton from "./TabButton";
import { Icon } from "../reuse/Icon";
import { useWindowResize } from "../../helpers/useWindowResize";
import { IconButton } from "../reuse/IconButton";
import { Line } from "../reuse/Line";
import { Form } from "../pages/contact page/Form";
import { FollowUs } from "../footer/FollowUs";
import cn from "classnames";
import { Link } from "../reuse/Link";
import { onClickNavigate } from "../../helpers/useNavigation";
import { Image } from "../reuse/Image";
const logo = require("../../assets/photos/Logo_simple.png");

export const tabTexts: string[] = [
  "collections",
  "products",
  "about",
  "contact",
];

export const Navbar = () => {
  const { isMobile } = useWindowResize();
  const [sidebar, setSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const offset = navRef?.current?.clientHeight!;
      const isScrolled = window.scrollY > offset;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navRef]);

  const logoComp = (
    <Link
      onClick={(e) => onClickNavigate(e, "/")}
      href={"/"}
      className={styles.logo}
    >
      <Image src={logo} alt="logo" />
    </Link>
  );

  const tab = (text: string, isMobile: boolean = false) => {
    return (
      <>
        <div className={styles.tabWrapper}>
          <TabButton className={styles.tab} path={`/${text}`}>
            {text}
          </TabButton>
          {isMobile && <Icon icon="arrow" size="extra-small" color="white" />}
        </div>
        {isMobile && <Line color="black" />}
      </>
    );
  };

  return (
    <div className={styles.menu}>
      <div
        className={cn(styles.navbar, { [styles.scrolled]: scrolled })}
        ref={navRef}
      >
        {isMobile ? (
          <>
            <div className={styles.burger}>
              <IconButton
                onClick={() => setSidebar(true)}
                iconProps={{ icon: "burger", color: "gold", size: "small" }}
              />
            </div>
            <div className={styles.middle}>{logoComp}</div>
          </>
        ) : (
          <div className={styles.middle}>
            <div className={styles.left}>
              {tab(tabTexts[0], false)}
              {tab(tabTexts[1], false)}
            </div>
            {logoComp}
            <div className={styles.right}>
              {tab(tabTexts[2], false)}
              {tab(tabTexts[3], false)}
            </div>
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
              {tabTexts.map((text: string) => {
                return tab(text, isMobile);
              })}
              <div className={styles.emailList}>
                <Form />
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
