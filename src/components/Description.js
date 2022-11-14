import React from "react";
import AddItemButton from "./AddItemButton";

const Description = ({ description }) => {
  return (
    <div>
      <h2>Descripción del producto:</h2>
      <p className="description">{description}</p>
    </div>
  );
};

export default Description;
