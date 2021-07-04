import React from "react";
import "../../../css/About.css";
import TopPannel from "../all page stuff/TopPannel";
import Header from "../all page stuff/Header";
import TextBox from "../all page stuff/TextBox";

import the_boiz from "../../../assets/photos/Boiz.jpg";
import sedrak from "../../../assets/photos/Sedrak.jpg";

const item = {
  title: "How it started",
  date: null,
  story_1:
    "We are two graphic designers, programmers from Montreal, Canada, with experience in the video game industry and a passion for playing cards. On the weekends we would play Durak (Дурак), a russian skill based card game, and often judge playing cards we played width. So In the middle of the pandemic, we decided to embrace our biggest project idea yet and put our skills to the test!",
  image_1: the_boiz,
  story_2:
    "My name is Sedrak Nadzharyan / Seto, I'm 21 years old, born in Russia, and I am one of the cofounders of Vostok Cards and the designer of our first deck Animal Gangdom! My passions include design, Web Development, hands on work (Origami, Sculpting, Drawing, Painting), aside from that I do Calisthenics (Street Workout). My goal is to display my vision and passion for art and playing cards to people!",
  image_2: sedrak,
};

const header = {
  title: "About",
  desc: "About the boiz",
};

const AboutPage = () => {
  return (
    <div className="page">
      <Header title={header.title} description={header.desc} />
      <div className="container center_flex flex_columb">
        <div className="center_flex flex_columb story">
          <TopPannel item={item} />

          <TextBox text={item.story_1} />
          <div className="about_image  border">
            <img src={item.image_1} />
          </div>
          <TextBox text={item.story_2} />
          <div className="about_image  border">
            <img src={item.image_2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
