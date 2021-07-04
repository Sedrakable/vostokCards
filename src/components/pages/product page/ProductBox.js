import React, { useState } from "react";
import "../../../css/ProductPage.css";

const ProductBox = (item) => {
  const sideDecider = (item) => {
    const mystyle = {
      objectPosition: `50% ${item.item.transY}%`,
    };
    if (item.item.side === "left") {
      return (
        <div className="product_box ">
          <div className="imageWrap_left">
            <div className="left_side ">
              <div className="text_holder">
                <div className="text pad_8 container_title gold_text">
                  {item.item.title}
                </div>
                <p className="description_text text">{item.item.text}</p>
              </div>
              <div className="strip strip_left"></div>
            </div>

            <img style={mystyle} className="Image_page" src={item.item.image} />
          </div>
        </div>
      );
    } else if (item.item.side === "right") {
      return (
        <div className="product_box ">
          <div className="imageWrap_right">
            <img style={mystyle} className="Image_page" src={item.item.image} />
            <div className="right_side ">
              <div className="strip strip_right"></div>
              <div className="text_holder">
                <div className="text pad_8 container_title red_text">
                  {item.item.title}
                </div>
                <p className="description_text text">{item.item.text}</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="product_box ">
          <div className="imageWrap_left">
            <div className="left_side ">
              <div className="text_holder">
                {item.item.logo}
                <p className="description_text text">{item.item.text}</p>
                <a
                  className={"button text black_text gold_back page_button"}
                  href="https://www.kickstarter.com/profile/vostokcards"
                >
                  Kickstarter
                </a>
              </div>
              <div className="strip strip_left"></div>
            </div>

            <img style={mystyle} className="Image_page" src={item.item.image} />
          </div>
        </div>
      );
    }
  };

  return sideDecider(item);
};

export default ProductBox;
