import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CheckOut from "./components/CheckOut";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:productId" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<CheckOut />} />
      </Routes>
    </Router>
  );
}

export default App;
