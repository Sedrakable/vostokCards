import React from "react";
import Story from "./Story";
import "../../../css/News.css";

import img1 from "../../../assets/photos/playing_cards.jpg";
import red_diamond from "../../../assets/illu/Diamond Red.svg";

const items = [
  {
    title: "Release date",
    date: "01/06/2021",
    story_1:
      "So the cards are fianlly realseing and we are so hyped it. \
       Hopeffy all u slavic mafak love this shit and if u aint slavic ul become one. For mother Russia baby.",
    image: img1,
    story_2:
      "We gotg some picky blinder looking boiz, we got bikers gangs, \
      we got some nigga mafakas and finally cool as russian comrads.",
  },
  {
    title: "Our first card even nigga",
    date: "20/04/2021",
    story_1:
      "So the cards are fianlly realseing and we are so hyped it. \
      Hopeffy all u slavic mafak love this shit and if u aint slavic ul become one. For mother Russia baby.\
      We gotg some picky blinder looking boiz, we got bikers gangs, \
      we got some nigga mafakas and finally cool as russian comrads.",
    image: img1,
    story_2:
      "We gotg some picky blinder looking boiz, we got bikers gangs, \
      we got some nigga mafakas and finally cool as russian comrads.",
  },
  {
    title: "Ur moms release form this bed",
    date: "01/01/2021",
    story_1:
      "So the cards are fianlly realseing and we are so hyped it.\
       Hopeffy all u slavic mafak love this shit and if u aint slavic ul become one. For mother Russia baby.",
    image: img1,
    story_2:
      "We gotg some picky blinder looking boiz, we got bikers gangs, \
      we got some nigga mafakas and finally cool as russian comrads. \
      We gotg some picky blinder looking boiz, we got bikers gangs, \
      we got some nigga mafakas and finally cool as russian comrads.\
      We gotg some picky blinder looking boiz, we got bikers gangs, \
      we got some nigga mafakas and finally cool as russian comrads.\
      We gotg some picky blinder looking boiz, we got bikers gangs, \
      we got some nigga mafakas and finally cool as russian comrads.",
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
