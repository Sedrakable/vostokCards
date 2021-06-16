import React from "react";
import "../../../css/About.css";

import red_diamond from "../../../assets/illu/Diamond Hover.svg";

const AboutPage = () => {
  return (
    <div className="page">
      <h1 className="page_title">About</h1>
      <h1 className="pageDescription">About the Boiz</h1>
      <div className="about border white_back">
        <div className="about_title title text pad_16 news_title">
          How it started
        </div>
        <div className="text about_text pad_18">
          We are two graphic designers from Montreal, Canada, with experience in
          the video game industry, but a passion for playing cards. In the
          middle of the pandemic, we decided to embrace our biggest project idea
          yet and put our skills to the test!
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
