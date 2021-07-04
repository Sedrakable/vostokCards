import React from "react";
import diamond from "../../../assets/illu/Diamond.svg";

const TopPannel = ({ item }) => {
  return (
    <div className="center_flex flex_columb story">
      <div className="center_flex space_between brown_back border pad_8 w_max">
        <div className="container_diamond">
          <img src={diamond} />
        </div>

        <div>
          <div className="text pad_8 container_title white_text">
            {item.title}
          </div>
          <div className="text container_date red_text">{item.date}</div>
        </div>
        <div className="container_diamond">
          <img src={diamond} />
        </div>
      </div>
    </div>
  );
};

export default TopPannel;
