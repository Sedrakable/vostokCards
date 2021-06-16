import React, { useState, useEffect, useRef } from "react";
import NewBoxImages from "./NewBoxImages";
import ArrowButton from "./ArrowButton";
import Circles from "./Circles";
import TabButton from "../../navbar/TabButton";

import image_1 from "../../../assets/photos/AG_2.JPG";
import image_2 from "../../../assets/photos/AG_3.JPG";
import image_3 from "../../../assets/photos/AG_1.JPG";
import image_4 from "../../../assets/photos/AG_4.JPG";
import Title from "../../../assets/illu/Title.svg";

const items = [
  {
    image: image_1,
    text: "I",
  },
  {
    image: image_2,
    text: "II",
  },
  {
    image: image_3,
    text: "III",
  },
  {
    image: image_4,
    text: "IV",
  },
];

const NewBox = () => {
  const myRef = useRef();

  const [styles, setStyles] = useState(0);
  const [maximum, setMaximum] = useState(null);
  const [num, setNum] = useState(0);
  const [speed, setSpeed] = useState(1);

  const increaseNum = () => {
    num < maximum ? setNum(num + 1) : setNum(0);
  };

  const decreaseNum = () => {
    num > 0 ? setNum(num - 1) : setNum(maximum);
  };

  useEffect(() => {
    const max = myRef.current.children.length;
    setMaximum(max - 1);
  }, []);

  useEffect(() => {
    setStyles(-100 * num);
    setSpeed(speed);

    const timerId = setInterval(() => {
      increaseNum();
    }, 5000);

    return () => {
      clearInterval(timerId);
    };
  }, [num]);

  const myStyle = {
    transform: `translateX(${styles}%)`,
    transition: `transform ${speed}s`,
  };

  return (
    <div className="new_box border_hori">
      <div ref={myRef} style={myStyle} className="Pack">
        <NewBoxImages items={items} />
      </div>

      <ArrowButton name="prev" onClick={() => decreaseNum()} />
      <ArrowButton name="next" onClick={() => increaseNum()} />

      <div className="new_box_title flex_columb abs center_flex">
        <img className="logo_image pad_16  brown_back border" src={Title} />
        <TabButton
          addClass={"new_box_button text black_text gold_back pad_8"}
          href="/products/animal_gangdom"
        >
          See Product
        </TabButton>
      </div>

      {maximum ? <Circles max={maximum} num={num} /> : null}
    </div>
  );
};

export default NewBox;
