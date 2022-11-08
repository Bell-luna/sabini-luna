import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/" className="nav-enl">
          Home
        </Link>
        <Link to="/productos" className="nav-enl">
          Productos
        </Link>

        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;
