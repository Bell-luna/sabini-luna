import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <nav>
        <a href="#" className="nav-enl">
          Home
        </a>
        <Link to="/" className="nav-enl">
          Productos
        </Link>
        <Link to="/detail" className="nav-enl">
          Contacto
        </Link>
        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;
