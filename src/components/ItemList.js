import Zapato1 from "../assets/img/corbata.jpg";
import Zapato2 from "../assets/img/cordones.jpg";
import Zapato3 from "../assets/img/zapcinto.jpg";
import Zapato4 from "../assets/img/marrones.jpg";
import { Link } from "react-router-dom";

const Product = ({ to, src, name }) => {
  return (
    <Link to={to}>
      <div className="product">
        <img src={src} />
        <p>{name}</p>
      </div>
    </Link>
  );
};

const ItemList = () => {
  return (
    <div className="productsContainer">
      <Product to="/productos/1" src={Zapato1} name="Zapato y corbata" />
      <Product to="/productos/2" src={Zapato2} name="Acordonados" />
      <Product to="/productos/3" src={Zapato3} name="Zapato y cinto" />
      <Product to="/productos/4" src={Zapato4} name="Diseños unicos" />
    </div>
  );
};

export default ItemList;
