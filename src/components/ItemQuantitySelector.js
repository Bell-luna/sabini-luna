import React, { useState } from "react";
import AddItemButton from "./AddItemButton";

// Cuando toco AddItemButton quiero hacer un console.log de
// Agregar al carrito: 2

const ItemQuantitySelector = ({ productId }) => {
  const [cantidad, setCantidad] = useState(0);

  console.log({ productId, cantidad });

  const handleOnClick = () => {
    console.log("Agregar al carrito ", cantidad);
    localStorage.setItem(productId, cantidad);
  };

  return (
    <div>
      <div>Cantidad</div>

      <input
        type="number"
        placeholder="0"
        onChange={(e) => setCantidad(e.target.value)}
      />
      <AddItemButton onClick={() => handleOnClick()} />
    </div>
  );
};

export default ItemQuantitySelector;
