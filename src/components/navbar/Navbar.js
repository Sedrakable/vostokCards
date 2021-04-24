import React from "react";
import "../../css/Navbar.css";
import TabButton from "./TabButton";

//Images
import News from "../../assets/illu/News.svg";
import Products from "../../assets/illu/Products.svg";
import About from "../../assets/illu/About.svg";
import Contact from "../../assets/illu/Contact.svg";
import Shop from "../../assets/illu/Cart.svg";
import Logo from "../../assets/illu/Main Logo.svg";
import BackLogo from "../../assets/illu/Back Logo.svg";

const Navbar = () => {
  return (
    <div className="Navbar brown_back border_hori">
      <div className="left">
        <TabButton image={Shop} />
      </div>
      <div className="middle">
        <TabButton href="/news">
          <img className={"TabButton"} src={News} />
        </TabButton>

        <TabButton href="/products">
          <img className={"TabButton"} src={Products} />
        </TabButton>

        <TabButton href="/">
          <div class="logo_wrapper">
            <img className={"back_logo"} src={BackLogo} />
            <img className={"main_logo"} src={Logo} />
          </div>
        </TabButton>

        <TabButton href="/products">
          <img className={"TabButton"} src={About} />
        </TabButton>

        <TabButton href="/products">
          <img className={"TabButton"} src={Contact} />
        </TabButton>
      </div>
      <div className="right">
        <TabButton href="/shop" className={"ShopButton"} image={Shop} />
      </div>
    </div>
  );
};

export default Navbar;
