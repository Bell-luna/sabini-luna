import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/home" className="nav-enl">
          Home
        </Link>
        <Link to="/" className="nav-enl">
          Productos
        </Link>
        <Link to="/detail" className="nav-enl">
          Contacto
        </Link>
        <Link to="/detail/1234" className="nav-enl">
          detailid
        </Link>

        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;
