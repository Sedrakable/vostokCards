import React from "react";
import arrow from "../assets/illu/Arrow.svg";

const ArrowButton = ({ name, onClick }) => {
  return (
    <a className={`Arrow ${name}`} onClick={onClick}>
      <img src={arrow} />
    </a>
  );
};

export default ArrowButton;
