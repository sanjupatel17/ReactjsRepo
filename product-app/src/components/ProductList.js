import React from "react";
import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";

const ProductList = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <h2 className="center">Loading products...</h2>;
  if (error) return <h2 className="center error">{error}</h2>;

  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
