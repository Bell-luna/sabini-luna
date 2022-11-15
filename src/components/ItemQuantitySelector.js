import React, { useState } from "react";
import AddItemButton from "./AddItemButton";

const ItemQuantitySelector = ({ productId }) => {
  const [cantidad, setCantidad] = useState(0);
  const [save, setSave] = useState(false);

  console.log({ productId, cantidad });

  const handleOnClick = () => {
    console.log("Agregar al carrito ", cantidad);
    if (cantidad >= 0) {
      localStorage.setItem(productId, cantidad);
      setSave(true);
    }
  };

  return (
    <div>
      {!save ? (
        <>
          <div>Cantidad</div>
          <input
            min="0"
            type="number"
            placeholder="0"
            onChange={(e) => setCantidad(e.target.value)}
          />
          <AddItemButton onClick={() => handleOnClick()} />{" "}
        </>
      ) : (
        "Agregado al carrito"
      )}
    </div>
  );
};

export default ItemQuantitySelector;
