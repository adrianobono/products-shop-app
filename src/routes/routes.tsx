import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import ProductsContainer from "../pages/ProductsContainer/ProductsContainer";
import CartContainer from "../pages/CartContainer/CartContainer";
import { NavBar } from "../components/NavBar";
import NewProductContainer from "../pages/CrudProductContainer/CrudProductContainer";

const Router: React.FC = () => {
  {
    /* Router function to switch between page elements */
  }
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductsContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/crud" element={<NewProductContainer />} />
        {/* If user try access path that not exists show products page */}
        <Route path="*" element={<ProductsContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
