import React from "react";
import { Link } from "react-router-dom";

const CartWidget = ({ chil }) => {
  return (
    <div className="cart">
      <Link to="/carrito">
        <i class="bi bi-bag-plus"></i>
      </Link>
    </div>
  );
};

export default CartWidget;
