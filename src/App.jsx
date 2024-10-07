import { useState } from "react";
import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products";
import { Header } from "./components/Header";

function App() {
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    catergory: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.catergory === "all" || product.catergory === filters.catergory)
      );
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
