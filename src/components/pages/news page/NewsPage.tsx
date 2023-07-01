import React from "react";
import Story from "./Story";
import Header from "../all page stuff/Header";
import "../../../css/News.css";

import { TopPannelProps } from "../all page stuff/TopPannel";
const news_1 = "../../../assets/photos/News_1.jpg";

const items: TopPannelProps[] = [
  {
    title: "Nearing the Launch",
    date: "2021-06-15",
  },
];
const header = {
  title: "News",
  desc: "Past and Future updates",
};

const NewsPage = () => {
  return (
    <div className="page">
      <Header title={header.title} description={header.desc} />
      <div className="container center_flex flex_columb">
        <Story items={items} />
      </div>
    </div>
  );
};

export default NewsPage;
