import React from "react";
import imgs from "../assets/imgs";

const nombre = "Sabini";

const ItemListContainer = () => {
  return (
    <div>
      <h1 className="h1">Bienvenidos a {nombre}</h1>

      <Imgs />
    </div>
  );
};

export default ItemListContainer;
