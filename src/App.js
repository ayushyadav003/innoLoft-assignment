import "./App.css";
import EditProduct from "./components/editProduct/EditProduct";
import ProductView from "./components/productView/ProductView";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductView />} />
        <Route path="/product" element={<ProductView />} />
        <Route path="/edit-product" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
