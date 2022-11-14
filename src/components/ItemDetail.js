import React from "react";
import Zapato1 from "../assets/img/corbata.jpg";
import Zapato2 from "../assets/img/cordones.jpg";
import Zapato3 from "../assets/img/zapcinto.jpg";
import Zapato4 from "../assets/img/marrones.jpg";
import Description from "./Description";
import ItemQuantitySelector from "./ItemQuantitySelector";

const Product = ({ src, name, description, productId }) => {
  return (
    <div className="product">
      <img src={src} />
      <p>{name}</p>

      <Description description={description} />
      <ItemQuantitySelector productId={productId} />
    </div>
  );
};

const ItemDetail = ({ productId }) => {
  if (productId === "1")
    return (
      <Product
        src={Zapato1}
        name="Zapato y corbata"
        description="El zapato es negro y la corbata es verde."
        productId={productId}
      />
    );

  if (productId === "2")
    return (
      <Product
        src={Zapato2}
        name="Acordonados"
        description="Zapato marron con cordones"
        productId={productId}
      />
    );

  if (productId === "3")
    return (
      <Product
        src={Zapato3}
        name="Zapato y cinto"
        description="Cinto y zapato marron"
        productId={productId}
      />
    );

  if (productId === "4")
    return (
      <Product
        src={Zapato4}
        name="Diseños unicos"
        description="Zapato marron"
        productId={productId}
      />
    );
};

export default ItemDetail;
