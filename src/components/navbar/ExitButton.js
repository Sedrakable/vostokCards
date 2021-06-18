import React, { useState } from "react";

const ExitButton = ({ onPress, addClass }) => {
  return (
    <a
      onClick={onPress}
      className={`exit_button center_flex flex_columb ${addClass}`}
    >
      <div className="exit_bar red_back bar_1"></div>
      <div className="exit_bar red_back bar_2"></div>
    </a>
  );
};

export default ExitButton;
