import React from "react";
import Story from "./Story";
import "../../../css/News.css";

import news_1 from "../../../assets/photos/News_1.jpg";
import red_diamond from "../../../assets/illu/Diamond.svg";

const items = [
  {
    title: "Nearing the Launch",
    date: "2021-06-15",
    story_1:
      "We are nearing the launch date of our Kickstarter! This is the first place where the deck Animal Gangdom will be available to purchase. We are in the process of taking and editing images that will represent the deck in the best light possible, figuratively and literally...",
    image: news_1,
    story_2: null,
  },
];

const NewsPage = () => {
  return (
    <div className="page">
      <h1 className="page_title">News</h1>
      <h1 className="pageDescription">Find out about past and current info</h1>
      <div className="news_container center_flex flex_columb">
        <Story items={items} diamond={red_diamond} />
      </div>
    </div>
  );
};

export default NewsPage;
