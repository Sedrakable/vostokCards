import React, { useState, useEffect, useRef } from "react";
import NewBoxImages from "./NewBoxImages";
import ArrowButton from "./ArrowButton";
import Circles from "./Circles";

import image_1 from "../assets/photos/cards 1.jpg";
import image_2 from "../assets/photos/cards 2.jpg";
import image_3 from "../assets/photos/cards 3.jpg";
import image_4 from "../assets/photos/cards 4.jpg";
import Title from "../assets/illu/Title.svg";
import Corner from "../assets/illu/Corner.svg";

const items = [
  {
    image: image_1,
    text: "King Spades",
  },
  {
    image: image_2,
    text: "All Cards",
  },
  {
    image: image_3,
    text: "King Hearts",
  },
  {
    image: image_4,
    text: "Card Box",
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
    <div className="new_box">
      <div ref={myRef} style={myStyle} className="Pack">
        <NewBoxImages items={items} />
      </div>

      <ArrowButton name="prev" onClick={() => decreaseNum()} />
      <ArrowButton name="next" onClick={() => increaseNum()} />

      <div className="Title">
        <img className="logo_image" src={Title} />
      </div>

      {maximum ? <Circles max={maximum} num={num} /> : null}
    </div>
  );
};

export default NewBox;
