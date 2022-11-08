import React from "react";
import Zapato1 from "../assets/img/corbata.jpg";

const ItemDetail = ({ productId }) => {
  if (productId === "1")
    return (
      <div className="product">
        <img src={Zapato1} />
        <p>Zapato y corbataame</p>
      </div>
    );

  if (productId === "2")
    return (
      <div className="product">
        <img src={Zapato1} />
        <p>Zapato y corbataame</p>
      </div>
    );

  if (productId === "3")
    return (
      <div className="product">
        <img src={Zapato1} />
        <p>Zapato y corbataame</p>
      </div>
    );

  if (productId === "4")
    return (
      <div className="product">
        <img src={Zapato1} />
        <p>Zapato y corbataame</p>
      </div>
    );
};

export default ItemDetail;
