import React from "react";

const ProductPannel: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div className="pannel">
      <img src={image}></img>
    </div>
  );
};

export default ProductPannel;
