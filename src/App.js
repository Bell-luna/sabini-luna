import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";

import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route index element={<ItemListContainer />} />
        <Route path="/detail" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
