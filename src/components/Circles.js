import React, { useRef, useEffect, useState } from "react";
import diamond from "../assets/illu/Diamond.svg";
import diamondRed from "../assets/illu/Diamond Red.svg";

const dots = [];
let enume = -1;

const Circles = ({ max, num }) => {
  const myRef = useRef();
  const [dots, setDots] = useState([]);
  const [previusNum, setPreviusNum] = useState(num);

  const createDot = (d) => {
    enume++;
    return (
      <a className="diamond">
        <img id={`diamond_${enume}`} src={d} />
      </a>
    );
  };

  const createDots = () => {
    for (let x = 0; x < max + 1; x++) {
      if (x === 0) {
        setDots((dots) => [...dots, createDot(diamondRed)]);
      } else {
        setDots((dots) => [...dots, createDot(diamond)]);
      }
    }
  };

  useEffect(() => {
    createDots();
  }, []);

  useEffect(() => {
    var x = myRef.current.children[num];
    var beforeX = myRef.current.children[previusNum];

    if (x != null) {
      beforeX.children[0].src = diamond;
      x.children[0].src = diamondRed;
    }
    setPreviusNum(num);
  }, [num]);

  return (
    <div ref={myRef} id="dots" className="dots">
      {dots}
    </div>
  );
};

export default Circles;
