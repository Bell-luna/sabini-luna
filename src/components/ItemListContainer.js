import React from "react";
import Zapato1 from "../assets/img/corbata.jpg";
import Zapato2 from "../assets/img/cordones.jpg";
import Zapato3 from "../assets/img/zapcinto.jpg";
import Zapato4 from "../assets/img/marrones.jpg";

const nombre = "Sabini";
const ItemListContainer = () => {
  return (
    <div>
      <h1 className="h1">Bienvenidos a {nombre}</h1>

      <img className="zapato1" src={Zapato1} />
      <p className="zapato1">Zapato y corbata</p>

      <img className="zapato2" src={Zapato2} />
      <p className="zapato2">Acordonados</p>

      <img className="zapato3" src={Zapato3} />
      <p className="zapato3">Zapato y cinto</p>

      <img className="zapato4" src={Zapato4} />
      <p className="zapato4">Diseños unicos</p>
    </div>
  );
};

export default ItemListContainer;
