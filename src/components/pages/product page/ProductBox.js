import React, { useState } from "react";
import "../../../css/ProductPage.css";
import NewBox from "../home page/NewBox";

const ProductBox = (item) => {
  const sideDecider = (item) => {
    if (item.item.side === "left") {
      return (
        <div className="product_box ">
          <div className="imageWrap_left">
            <div className="left_side ">
              <div className="left_trapeeze"></div>
              <div className="border_trapeeze_left"></div>
              <div className="text_holder">
                {item.item.logo}
                <p className="description_text text">{item.item.text}</p>
              </div>
            </div>

            <img className="Image " src={item.item.image} />
          </div>
        </div>
      );
    } else if (item.item.side === "right") {
      return (
        <div className="product_box ">
          <div className="imageWrap_right">
            <div className="right_side ">
              <div className="right_trapeeze"></div>
              <div className="border_trapeeze_right"></div>
              <div className="text_holder">
                {item.item.logo}
                <p className="description_text text">{item.item.text}</p>
              </div>
            </div>

            <img className="Image " src={item.item.image} />
          </div>
        </div>
      );
    } else if (item.item.side === "title") {
      return (
        <div className="product_box ">
          <div className="imageWrap_left">
            <div className="left_side ">
              <div className="left_trapeeze"></div>
              <div className="border_trapeeze_left"></div>
              <div className="text_holder">
                {item.item.logo}
                <p className="description_text text">{item.item.text}</p>
                <a
                  className={"kick_button text black_text gold_back"}
                  href="https://www.kickstarter.com/profile/vostokcards"
                >
                  Kickstarter
                </a>
              </div>
            </div>

            <img className="Image " src={item.item.image} />
          </div>
        </div>
      );
    } else if (item.item.side === "album") {
      return (
        <React.Fragment>
          <NewBox />
        </React.Fragment>
      );
    }
  };

  return sideDecider(item);
};

export default ProductBox;
