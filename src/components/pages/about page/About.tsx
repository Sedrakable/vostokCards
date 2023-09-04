import React from "react";
import Header from "../../reuse/Header";

import styles from "./About.module.scss";
import { Story, StoryType } from "./Story";
import { Heading } from "../../reuse/Heading";

const working: string = require("../../../assets/photos/ComingSoon.jpg");

const sedrak: string = require("../../../assets/photos/Sedrak.jpg");
const fabiana: string = require("../../../assets/photos/Fabiana.jpg");

const story_1 =
  "Infusing Premium Quality with Intricate Designs, Elevating Aesthetics, While Upholding Playability.";

// const story_1 =
//   "We are two graphic designers, programmers from Montreal, Canada, with experience in the video game industry and a passion for playing cards. On the weekends we would play Durak (Дурак), a russian skill based card game, and often judge playing cards we played width. So In the middle of the pandemic, we decided to embrace our biggest project idea yet and put our skills to the test!";
const storySedrak =
  "Hello! I'm Sedrak Nadzharyan, the creative mind behind the captivating Steampunk Dynasty and Animal Gangdom decks. As an illustrator and graphic designer, I strive to bring intricate and one-of-a-kind designs to life, blending digital tools with traditional techniques. With a keen focus on attention to detail, storytelling, and crafting immersive worlds, my goal is to transport you to a mesmerizing Steampunk realm like no other. I've poured my heart and soul into creating these decks, and I can't wait for you to join me on this extraordinary journey.";

const storyFabiana =
  "Hi there! I'm Fabiana Pennimpede, the author of “Gears and Glory”, a novel set in the Steampunk Dynasty universe. My goal was to bring these characters to life by creating personalities that matched each face card design. By using my creativity and imagination, I have successfully transformed ordinary playing cards into a vivid and immersive world. Get ready for a captivating journey filled with mystery and adventure. I hope you enjoy this new world as much as I enjoyed creating it.";

const header = {
  title: "Vostok Cards",
  desc: story_1,
};

const sedrakStory: StoryType = {
  image: { src: sedrak, alt: sedrak },
  name: "Sedrak Nadzharyan",
  description: storySedrak,
};

const fabyStory: StoryType = {
  image: { src: fabiana, alt: sedrak },
  name: "Fabiana Pennimpede",
  description: storyFabiana,
};

const aboutStories: StoryType[] = [sedrakStory, fabyStory];

export const About: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header
        title={header.title}
        description={header.desc}
        image={{ src: working, alt: "working on projects" }}
      />
      <div className={styles.title}>
        <Heading as="h1" level="1" color="white" textAlign="center">
          The Team
        </Heading>
      </div>
      <div className={styles.grid}>
        {aboutStories.map((story: StoryType, i) => {
          return (
            <Story {...story} imageSide={i % 2 === 0 ? "left" : "right"} />
          );
        })}
      </div>
    </div>
  );
};
