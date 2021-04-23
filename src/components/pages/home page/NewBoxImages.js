import React, { useState } from "react";

const NewBoxImages = ({ items }) => {
  const renderItems = items.map((item) => {
    return (
      <div key={item.text} className="imageWrap_left">
        <img className="Image" src={item.image} />
        <div className="text abs background">{item.text}</div>
      </div>
    );
  });

  return <React.Fragment>{renderItems}</React.Fragment>;
};

export default NewBoxImages;
