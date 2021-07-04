import React, { useState, useEffect, useRef } from "react";
import NewBoxImages from "./NewBoxImages";
import ArrowButton from "./ArrowButton";
import Circles from "./Circles";
import TabButton from "../../navbar/TabButton";

const NewBox = ({ children, items }) => {
  const getWidth = () =>
    window.screen.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const myRef = useRef();

  const [styles, setStyles] = useState(0);
  const [maximum, setMaximum] = useState(null);
  const [num, setNum] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [arrowY, setArrowY] = useState(0);

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

  const MoveArrows = () => {
    if (getWidth() <= 600) {
      console.log(arrowStyle);
      setArrowY((600 - getWidth()) / 2);
    }
  };

  window.addEventListener("resize", (event) => {
    MoveArrows();
  });

  const arrowStyle = {
    marginTop: `${arrowY}px`,
  };

  return (
    <div className="new_box border_hori">
      <div ref={myRef} style={myStyle} className="Pack">
        <NewBoxImages items={items} />
      </div>

      <ArrowButton
        style={arrowStyle}
        name="prev"
        onClick={() => decreaseNum()}
      />
      <ArrowButton
        style={arrowStyle}
        name="next"
        onClick={() => increaseNum()}
      />

      {children}
      {maximum ? <Circles max={maximum} num={num} /> : null}
    </div>
  );
};

export default NewBox;
