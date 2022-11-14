import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  let { productId } = useParams();
  console.log(productId);

  return (
    <div>
      <ItemDetail productId={productId} />
    </div>
  );
};

export default ItemDetailContainer;
