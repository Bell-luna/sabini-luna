import React from "react";

const AddItemButton = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Agregar al carrito</button>
    </div>
  );
};

export default AddItemButton;
