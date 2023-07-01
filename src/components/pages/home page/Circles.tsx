import React, { useRef, useEffect, useState } from "react";
import diamond from "../../../assets/illu/Diamond.svg";
import diamondRed from "../../../assets/illu/Diamond Hover.svg";

let enume = -1;

const Circles: React.FC<{ max: number; num: number }> = ({ max, num }) => {
  const myRef = useRef(null);
  const [dots, setDots] = useState<JSX.Element[]>([]);
  const [previusNum, setPreviusNum] = useState(num);

  const createDot = (d: string) => {
    enume++;
    return (
      <div className="diamond">
        <img id={`diamond_${enume}`} src={d} alt="alt" />
      </div>
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

  createDots();

  // useEffect(() => {
  //   const x = myRef?.current?.children[num];
  //   const beforeX = myRef?.current?.children[previusNum];

  //   if (x != null) {
  //     beforeX.children[0].src = diamond;
  //     x.children[0].src = diamondRed;
  //   }
  //   setPreviusNum(num);
  // }, [num]);

  return (
    <div ref={myRef} id="dots" className="dots ">
      {dots}
    </div>
  );
};

export default Circles;
