import React from "react";
import { ReactComponent as Diamond } from "../../../assets/illu/Diamond.svg";

export interface TopPannelProps {
  title: string;
  date?: string;
}
const TopPannel: React.FC<{ item: TopPannelProps }> = ({ item }) => {
  return (
    <div className="center_flex flex_columb story">
      <div className="center_flex space_between brown_back border pad_8 w_max">
        <div className="container_diamond">
          <Diamond />
        </div>

        <div>
          <div className="text pad_8 container_title white_text">
            {item.title}
          </div>
          <div className="text container_date red_text">{item.date}</div>
        </div>
        <div className="container_diamond">
          <Diamond />
        </div>
      </div>
    </div>
  );
};

export default TopPannel;
