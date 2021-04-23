import React from "react";

const Story = ({ items }) => {
  const renderItems = items.map((item) => {
    return (
      <div className="center_flex flex_columb story">
        <div className="red_back pad_8 w_max">
          <div className="text pad_8 news_title">{item.title}</div>
          <div className="text  news_date">{item.date}</div>
        </div>

        <div className="text news_text pad_8">{item.story_1}</div>
        <div className="news_image  border">
          <img src={item.image} />
        </div>
        <div className=" text news_text pad_8">{item.story_2}</div>
      </div>
    );
  });

  return <React.Fragment>{renderItems}</React.Fragment>;
};

export default Story;
