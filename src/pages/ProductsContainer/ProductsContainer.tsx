import { useEffect, useState } from "react";
import { getProducts } from "../../services/DataProductsSevices";

function ProductsContainer() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      List
      <ul>
        {products.map((item: any) => (
          <li>Product: {item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsContainer;
