import React from "react";
import Zapato1 from "../assets/img/corbata.jpg";
import Zapato2 from "../assets/img/cordones.jpg";
import Zapato3 from "../assets/img/zapcinto.jpg";

const nombre = "Sabini";
const ItemListContainer = () => {
  return (
    <div>
      <h1 className="h1">Bienvenidos a {nombre}</h1>
      <img className="zapato1" src={Zapato1} />
      <img className="zapato2" src={Zapato2} />
      <img className="zapato3" src={Zapato3} />
    </div>
  );
};

export default ItemListContainer;
