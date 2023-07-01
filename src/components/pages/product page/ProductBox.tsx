import React from "react";
import "../../../css/ProductPage.css";
import { ItemsType } from "./ProductPage";

const ProductBox: React.FC<{ item: ItemsType }> = ({ item }) => {
  const mystyle = {
    objectPosition: `50% ${item.transY}%`,
  };
  if (item.side === "left") {
    return (
      <div className="product_box ">
        <div className="imageWrap_left">
          <div className="left_side ">
            <div className="text_holder">
              <div className="text pad_8 container_title gold_text">
                {item.title}
              </div>
              <p className="description_text text">{item.text}</p>
            </div>
            <div className="strip strip_left"></div>
          </div>

          <img style={mystyle} className="Image_page" src={item.image} />
        </div>
      </div>
    );
  } else if (item.side === "right") {
    return (
      <div className="product_box ">
        <div className="imageWrap_right">
          <img style={mystyle} className="Image_page" src={item.image} />
          <div className="right_side ">
            <div className="strip strip_right"></div>
            <div className="text_holder">
              <div className="text pad_8 container_title red_text">
                {item.title}
              </div>
              <p className="description_text text">{item.text}</p>
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
              {item.logo}
              <p className="description_text text">{item.text}</p>
              <a
                className={"button text black_text gold_back page_button"}
                href="https://www.kickstarter.com/profile/vostokcards"
              >
                Kickstarter
              </a>
            </div>
            <div className="strip strip_left"></div>
          </div>

          <img style={mystyle} className="Image_page" src={item.image} />
        </div>
      </div>
    );
  }
};

export default ProductBox;
