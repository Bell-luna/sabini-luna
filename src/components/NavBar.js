import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <nav>
        <a href="#" className="marca">
          SABINI
        </a>
        <a href="#" className="nav-enl">
          Home
        </a>
        <a href="#" className="nav-enl">
          Productos
        </a>
        <a href="#" className="nav-enl">
          Contacto
        </a>
        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;
