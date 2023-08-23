import React from "react";
import TopPannel, { TopPannelProps } from "../all page stuff/TopPannel";
import Header from "../../reuse/Header";
import TextBox from "../all page stuff/TextBox";
import { SideContainer } from "../containers/SideContainer";

const the_boiz = "../../../assets/photos/Boiz.jpg";
const sedrak = "../../../assets/photos/Sedrak.jpg";
const story_1 =
  "We are two graphic designers, programmers from Montreal, Canada, with experience in the video game industry and a passion for playing cards. On the weekends we would play Durak (Дурак), a russian skill based card game, and often judge playing cards we played width. So In the middle of the pandemic, we decided to embrace our biggest project idea yet and put our skills to the test!";
const story_2 =
  "My name is Sedrak Nadzharyan / Seto, I'm 21 years old, born in Russia, and I am one of the cofounders of Vostok Cards and the designer of our first deck Animal Gangdom! My passions include design, Web Development, hands on work (Origami, Sculpting, Drawing, Painting), aside from that I do Calisthenics (Street Workout). My goal is to display my vision and passion for art and playing cards to people!";

const item: TopPannelProps = {
  title: "How it started",
};

const header = {
  title: "About",
  desc: "About the boiz",
};

const AboutPage = () => {
  return (
    <div className="page">
      <Header
        title={header.title}
        description={header.desc}
        image={{ src: the_boiz, alt: "" }}
      />
      <SideContainer title={"title"} description={story_1} />
      <div className="container center_flex flex_columb">
        <div className="center_flex flex_columb story">
          <TopPannel item={item} />

          <TextBox text={story_1} />
          <div className="about_image  border">
            <img src={the_boiz} alt="the boiz" />
          </div>
          <TextBox text={story_2} />
          <div className="about_image  border">
            <img src={sedrak} alt="the boiz" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
