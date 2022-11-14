import React from "react";
import Brief from "./Brief";

const CheckOut = () => {
  const cantidadProducto1 = localStorage.getItem("1");
  const cantidadProducto2 = localStorage.getItem("2");
  const cantidadProducto3 = localStorage.getItem("3");
  const cantidadProducto4 = localStorage.getItem("4");

  console.log("producto 1 => cantidad:", cantidadProducto1);
  console.log("producto 2 => cantidad:", cantidadProducto2);
  console.log("producto 3 => cantidad:", cantidadProducto3);
  console.log("producto 4 => cantidad:", cantidadProducto4);

  return (
    <div>
      <h1>CheckOut</h1>
      <p>Detalle de tu compra</p>

      <Brief name="Zapato 1" cantidad={cantidadProducto1} />
      <Brief name="Zapato 2" cantidad={cantidadProducto2} />
      <Brief name="Zapato 3" cantidad={cantidadProducto3} />
      <Brief name="Zapato 4" cantidad={cantidadProducto4} />
    </div>
  );
};

export default CheckOut;
