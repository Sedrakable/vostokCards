import React from "react";

const Story = ({ items, diamond }) => {
  const renderItems = items.map((item) => {
    return (
      <div className="center_flex flex_columb story">
        <div className="center_flex space_between brown_back border pad_8 w_max">
          <div className="news_diamond">
            <img src={diamond} />
          </div>

          <div>
            <div className="text pad_8 news_title white_text">{item.title}</div>
            <div className="text news_date red_text">{item.date}</div>
          </div>
          <div className="news_diamond">
            <img src={diamond} />
          </div>
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
