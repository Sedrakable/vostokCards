import React, { useState } from "react";

const HamburgerButton = ({ onPress, addClass }) => {
  return (
    <a
      onClick={onPress}
      className={`hamburger red_back center_flex flex_columb + ${addClass}`}
    >
      <div className="hamburger_bar black_back ham"></div>
      <div className="hamburger_bar black_back ham"></div>
      <div className="hamburger_bar black_back ham"></div>
    </a>
  );
};

export default HamburgerButton;
