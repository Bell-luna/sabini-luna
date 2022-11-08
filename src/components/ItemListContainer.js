import React from "react";
import ItemList from "./ItemList";

const nombre = "Sabini";
const ItemListContainer = () => {
  return (
    <div>
      <h1 className="h1">Bienvenidos a {nombre}</h1>

      <ItemList />
    </div>
  );
};

export default ItemListContainer;
