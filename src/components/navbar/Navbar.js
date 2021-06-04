import React, { useState } from "react";
import "../../css/Navbar.css";
import TabButton from "./TabButton";
import HamburgerButton from "./HamburgerButton";

//Images
import News from "../../assets/illu/News.svg";
import Products from "../../assets/illu/Products.svg";
import About from "../../assets/illu/About.svg";
import Contact from "../../assets/illu/Contact.svg";
import Shop from "../../assets/illu/Cart.svg";
import Logo from "../../assets/illu/Main Logo.svg";
import BackLogo from "../../assets/illu/Back Logo.svg";
import Diamond from "../../assets/illu/Diamond.svg";

const Navbar = () => {
  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const [hamburgerMenuClass, setHamburgerMenuClass] = useState("");
  const [hamburgerButtonClass, setHamburgerButtonClass] = useState("");
  const [tabClass, setTabClass] = useState("");
  const [width, setWidth] = useState(getWidth());

  const onClick = () => {
    setHamburgerMenuClass("activeBurger");
  };

  const onClickExit = () => {
    setHamburgerMenuClass("");
  };

  const callback = (x) => {
    setHamburgerMenuClass(x);
  };
  const burgerOrNo = () => {
    setWidth(getWidth());
    console.log(width);
    if (width <= 1200) {
      console.log("small");
      setHamburgerButtonClass("show");
      setTabClass("hide");
    } else {
      console.log("big");
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
        <div className="brown_back">
          <div className="exit_button red_back " onClick={onClickExit} />
        </div>

        <div className="hambuger_tabs">
          <TabButton
            href="/news"
            addClass={addMenuClass}
            parentCallback={callback}
          >
            <img className={"tab_diamond"} src={Diamond} />
            <h1 className={"tab_button tab_hover text red_text"}>News</h1>
          </TabButton>

          <TabButton
            href="/products"
            addClass={addMenuClass}
            parentCallback={callback}
          >
            <img className={"tab_diamond"} src={Diamond} />
            <h1 className={"tab_button tab_hover text red_text"}>Products</h1>
          </TabButton>

          <TabButton
            href="/about"
            addClass={addMenuClass}
            parentCallback={callback}
          >
            <img className={"tab_diamond"} src={Diamond} />
            <h1 className={"tab_button tab_hover text red_text"}>About</h1>
          </TabButton>

          <TabButton
            href="/products"
            addClass={addMenuClass}
            parentCallback={callback}
          >
            <img className={"tab_diamond"} src={Diamond} />
            <h1 className={"tab_button tab_hover text red_text"}>Contact</h1>
          </TabButton>
        </div>
      </div>
      <div className="Navbar brown_back">
        <div className="left ">
          <HamburgerButton onPress={onClick} addClass={hamburgerButtonClass} />
        </div>
        <div className="middle">
          <TabButton addClass={tabClass} href="/news">
            <img className={"tab_button tab_hover "} src={News} />
          </TabButton>

          <TabButton addClass={tabClass} href="/products">
            <img className={"tab_button tab_hover"} src={Products} />
          </TabButton>

          <TabButton href="/">
            <div className="logo_wrapper">
              <img className={"back_logo"} src={BackLogo} />
              <img className={"main_logo"} src={Logo} />
            </div>
          </TabButton>

          <TabButton addClass={tabClass} href="/about">
            <img className={"tab_button tab_hover"} src={About} />
          </TabButton>

          <TabButton addClass={tabClass} href="/products">
            <img className={"tab_button tab_hover"} src={Contact} />
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
