import { useEffect, useState } from "react";
import { getProducts } from "../../services/DataProductsSevices";
import { ProductsList } from "../../components/ProductstList";

function ProductsContainer() {
  return (
    <section>
      <ProductsList />
    </section>
  );
}

export default ProductsContainer;
