import React from "react";
import TextBox from "../all page stuff/TextBox";
import TopPannel, { TopPannelProps } from "../all page stuff/TopPannel";

const story_1 =
  "We are nearing the launch date of our Kickstarter! This is the first place where the deck Animal Gangdom will be available to purchase. We are in the process of taking and editing images that will represent the deck in the best light possible, figuratively and literally...";

const Story: React.FC<{ items: TopPannelProps[] }> = ({ items }) => {
  const renderItems = items.map((item) => {
    return (
      <div className="center_flex flex_columb story">
        <TopPannel item={item} />

        <TextBox text={story_1} />
      </div>
    );
  });

  return <React.Fragment>{renderItems}</React.Fragment>;
};

export default Story;
