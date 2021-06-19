import React from "react";

const Header = ({ title, description }) => {
  return (
    <div className="header">
      <h1 className="page_title">{title}</h1>
      <h1 className="pageDescription">{description}</h1>
    </div>
  );
};

export default Header;
