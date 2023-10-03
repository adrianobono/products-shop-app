import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsContainer from "../pages/ProductsContainer/ProductsContainer";
import CartContainer from "../pages/CartContainer/CartContainer";
import { NavBar } from "../components/NavBar";
import CrudProductContainer from "../pages/CrudProductContainer/CrudProductContainer";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductsContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/crud" element={<CrudProductContainer />} />
        {/* If user try access path that not exists show products page */}
        <Route path="*" element={<ProductsContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
