import React from "react";

const Brief = () => {
  const cantidadProducto1 = localStorage.getItem("1");
  const cantidadProducto2 = localStorage.getItem("2");
  const cantidadProducto3 = localStorage.getItem("3");
  const cantidadProducto4 = localStorage.getItem("4");

  return (
    <div className="caja">
      {cantidadProducto1 > 0 && (
        <h4>Zapato y corbata = {cantidadProducto1} unidades.</h4>
      )}
      {cantidadProducto2 > 0 && (
        <h4>Acordonados = {cantidadProducto2} unidades. </h4>
      )}
      {cantidadProducto3 > 0 && (
        <h4>Zapato y cinto = {cantidadProducto3} unidades.</h4>
      )}
      {cantidadProducto4 > 0 && (
        <h4>Diseños unicos = {cantidadProducto4} unidades.</h4>
      )}
    </div>
  );
};

export default Brief;
