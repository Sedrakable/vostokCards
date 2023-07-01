import React from "react";
import arrow from "../../../assets/illu/Arrow.svg";

const ArrowButton: React.FC<{
  style: React.CSSProperties;
  name: string;
  onClick: Function;
}> = ({ style, name, onClick }) => {
  return (
    <button style={style} className={`Arrow ${name}`} onClick={() => onClick}>
      <img src={arrow} alt="arrow" />
    </button>
  );
};

export default ArrowButton;
