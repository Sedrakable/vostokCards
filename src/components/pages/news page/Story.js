import React from "react";
import TextBox from "../all page stuff/TextBox";
import TopPannel from "../all page stuff/TopPannel";

const Story = ({ items }) => {
  const renderItems = items.map((item) => {
    return (
      <div className="center_flex flex_columb story">
        <TopPannel item={item} />

        <TextBox text={item.story_1} />
        <div className="news_image  border">
          <img src={item.image} />
        </div>
        <TextBox text={item.story_2} />
      </div>
    );
  });

  return <React.Fragment>{renderItems}</React.Fragment>;
};

export default Story;
