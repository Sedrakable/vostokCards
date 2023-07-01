import React from "react";

const ExitButton: React.FC<{
  onPress: React.MouseEventHandler<HTMLButtonElement>;
  addClass?: string;
}> = ({ onPress, addClass }) => {
  return (
    <button
      onClick={onPress}
      className={`exit_button center_flex flex_columb ${addClass}`}
    >
      <div className="exit_bar red_back bar_1"></div>
      <div className="exit_bar red_back bar_2"></div>
    </button>
  );
};

export default ExitButton;
