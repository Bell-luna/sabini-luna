import React from "react";

const Brief = () => {
  const cantidadProducto1 = localStorage.getItem("1");
  const cantidadProducto2 = localStorage.getItem("2");
  const cantidadProducto3 = localStorage.getItem("3");
  const cantidadProducto4 = localStorage.getItem("4");

  return (
    <div>
      <h5>Zapato 1 = {cantidadProducto1}</h5>
      <h5>Zapato 2 = {cantidadProducto2}</h5>
      <h5>Zapato 3 = {cantidadProducto3}</h5>
      <h5>Zapato 4 = {cantidadProducto4}</h5>
    </div>
  );
};

export default Brief;
