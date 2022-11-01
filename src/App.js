import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import DetailId from "./components/DetailId";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route index element={<ItemListContainer />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:detailId" element={<ItemDetailContainer />} />
        <Route path="/detail/:categoryId" element={<DetailId />} />
      </Routes>
    </Router>
  );
}

export default App;
