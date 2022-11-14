import React from "react";
import inicio from "../assets/img/inicio.jpg";

const Home = () => {
  return (
    <div>
      <h1 className="title">Hola estas en el home</h1>
      <img src={inicio} />
    </div>
  );
};

export default Home;
