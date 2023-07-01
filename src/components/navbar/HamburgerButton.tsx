import React from "react";

const HamburgerButton: React.FC<{
  onPress: React.MouseEventHandler<HTMLButtonElement>;
  addClass?: string;
}> = ({ onPress, addClass }) => {
  return (
    <button
      onClick={onPress}
      className={`hamburger center_flex flex_columb ${addClass}`}
    >
      <div className="hamburger_bar red_back "></div>
      <div className="hamburger_bar red_back "></div>
      <div className="hamburger_bar red_back "></div>
    </button>
  );
};

export default HamburgerButton;
