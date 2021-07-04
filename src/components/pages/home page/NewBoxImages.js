import React, { useState } from "react";

const NewBoxImages = ({ items }) => {
  const renderItems = items.map((item) => {
    return (
      <div className="imageWrap">
        <img className="Image" src={item} />
        <div className="text abs brown_back pad_8">Animal Gangdom</div>
      </div>
    );
  });

  return <React.Fragment>{renderItems}</React.Fragment>;
};

export default NewBoxImages;
