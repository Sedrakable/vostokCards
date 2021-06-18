import React from "react";
import arrow from "../../../assets/illu/Arrow.svg";

const ArrowButton = ({ style, name, onClick }) => {
  return (
    <a style={style} className={`Arrow ${name}`} onClick={onClick}>
      <img src={arrow} />
    </a>
  );
};

export default ArrowButton;
