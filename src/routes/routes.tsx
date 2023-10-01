import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import ProductsContainer from "../pages/ProductsContainer/ProductsContainer";
import CartContainer from "../pages/CartContainer/CartContainer";

const Router: React.FC = () => {
  {
    /* Router function to switch between page elements */
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        {/* If user try access path that not exists show products page */}
        <Route path="*" element={<ProductsContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
