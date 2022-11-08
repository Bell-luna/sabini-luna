import React from "react";
import Zapato1 from "../assets/img/corbata.jpg";
import Zapato2 from "../assets/img/cordones.jpg";
import Zapato3 from "../assets/img/zapcinto.jpg";
import Zapato4 from "../assets/img/marrones.jpg";

const ItemDetail = ({ productId }) => {
  if (productId === "1")
    return (
      <div className="product">
        <img src={Zapato1} />
        <p>Zapato y corbata</p>
      </div>
    );

  if (productId === "2")
    return (
      <div className="product">
        <img src={Zapato2} />
        <p>Acordonados</p>
      </div>
    );

  if (productId === "3")
    return (
      <div className="product">
        <img src={Zapato3} />
        <p>Zapato y cinto</p>
      </div>
    );

  if (productId === "4")
    return (
      <div className="product">
        <img src={Zapato4} />
        <p>Diseños unicos</p>
      </div>
    );
};

export default ItemDetail;
