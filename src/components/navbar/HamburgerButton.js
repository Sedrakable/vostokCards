import React, { useState } from "react";

const HamburgerButton = ({ onPress, addClass }) => {
  return (
    <a
      onClick={onPress}
      className={`hamburger center_flex flex_columb ${addClass}`}
    >
      <div className="hamburger_bar red_back "></div>
      <div className="hamburger_bar red_back "></div>
      <div className="hamburger_bar red_back "></div>
    </a>
  );
};

export default HamburgerButton;
