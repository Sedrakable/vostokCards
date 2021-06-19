import React from "react";
import "../../../css/About.css";
import Story from "../news page/Story";
import Header from "../all page stuff/Header";

import red_diamond from "../../../assets/illu/Diamond.svg";

const items = [
  {
    title: "How it started",
    date: null,
    story_1:
      "We are nearing the launch date of our Kickstarter! This is the first place where the deck Animal Gangdom will be available to purchase. We are in the process of taking and editing images that will represent the deck in the best light possible, figuratively and literally...",
    image: null,
    story_2: null,
  },
];

const header = {
  title: "About",
  desc: "About the boiz",
};

const AboutPage = () => {
  return (
    <div className="page">
      <Header title={header.title} description={header.desc} />
      <div className="container center_flex flex_columb">
        <Story items={items} diamond={red_diamond} />
      </div>
    </div>
  );
};

export default AboutPage;
