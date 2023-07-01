import React, { useState } from "react";
import "../../css/Navbar.css";
import TabButton from "./TabButton";
import HamburgerButton from "./HamburgerButton";
import ExitButton from "./ExitButton";

//Images
import { ReactComponent as News } from "../../assets/illu/News.svg";
import { ReactComponent as Products } from "../../assets/illu/Products.svg";
import { ReactComponent as About } from "../../assets/illu/About.svg";
import { ReactComponent as Contact } from "../../assets/illu/Contact.svg";
import { ReactComponent as Logo } from "../../assets/illu/Main Logo.svg";
import { ReactComponent as BackLogo } from "../../assets/illu/Back Logo.svg";
import { ReactComponent as Diamond } from "../../assets/illu/Diamond.svg";

const Navbar = () => {
  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const [hamburgerMenuClass, setHamburgerMenuClass] = useState("");
  const [hamburgerButtonClass, setHamburgerButtonClass] = useState("");
  const [tabClass, setTabClass] = useState("");

  const onClick = () => {
    setHamburgerMenuClass("activeBurger");
  };

  const onClickExit = () => {
    setHamburgerMenuClass("");
  };

  const burgerOrNo = () => {
    if (getWidth() <= 1000) {
      setHamburgerButtonClass("show");
      setTabClass("hide");
    } else {
      onClickExit();
      setHamburgerButtonClass("");
      setTabClass("");
    }
  };

  window.addEventListener("resize", (event) => {
    burgerOrNo();
  });

  window.addEventListener("load", (event) => {
    burgerOrNo();
  });

  const addMenuClass = "hambuger_tab center_flex";

  return (
    <div className="my_page ">
      <div className={`hamburger_menu black_back  ${hamburgerMenuClass}`}>
        <div className="brown_back hamburger_menu_top ">
          <ExitButton onPress={onClickExit} />
          <div className="ham_menu_text text title"> Menu</div>
        </div>

        <div className="hambuger_tabs">
          <TabButton href="/news" addClass={addMenuClass}>
            <Diamond />
            <h1 className={"tab_button ham_tab tab_hover text red_text"}>
              News
            </h1>
          </TabButton>

          <TabButton href="/products" addClass={addMenuClass}>
            <Diamond />
            <h1 className={"tab_button ham_tab tab_hover text red_text"}>
              Products
            </h1>
          </TabButton>

          <TabButton href="/about" addClass={addMenuClass}>
            <Diamond />
            <h1 className={"tab_button ham_tab tab_hover text red_text"}>
              About
            </h1>
          </TabButton>

          <TabButton href="/contact" addClass={addMenuClass}>
            <Diamond />
            <h1 className={"tab_button ham_tab tab_hover text red_text"}>
              Contact
            </h1>
          </TabButton>
        </div>
      </div>
      <div className="Navbar">
        <div className="left ">
          <HamburgerButton onPress={onClick} addClass={hamburgerButtonClass} />
        </div>
        <div className="middle">
          <TabButton addClass={`tab tab_silver ${tabClass}`} href="/news">
            <News />
          </TabButton>

          <TabButton addClass={`tab tab_silver ${tabClass}`} href="/products">
            <Products />
          </TabButton>

          <TabButton href="/">
            <div className="logo_wrapper">
              <BackLogo />
              <Logo />
            </div>
          </TabButton>

          <TabButton addClass={`tab tab_gold ${tabClass}`} href="/about">
            <About />
          </TabButton>

          <TabButton addClass={`tab tab_gold ${tabClass}`} href="/contact">
            <Contact />
          </TabButton>
        </div>
        <div className="right center_flex">
          <div className="hamburger red_back "></div>
          {/* <TabButton href="/shop" className={"ShopButton"} image={Shop} /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
