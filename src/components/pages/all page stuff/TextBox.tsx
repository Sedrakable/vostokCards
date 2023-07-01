import React from "react";

const TextBox: React.FC<{ text: string }> = ({ text }) => {
  return <span className="text container_text pad_8">{text}</span>;
};

export default TextBox;
