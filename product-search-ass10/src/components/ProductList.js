import React, { useState } from "react";
import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";
import "./ProductList.css";

const ProductList = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const { products, loading, error } = useProducts(searchTerm, category, maxPrice);

  if (loading) return <h2 style={{textAlign:"center"}}>Loading products...</h2>;
  if (error) return <h2 style={{textAlign:"center"}}>{error}</h2>;

  return (
    <>
      {/* Search + Filter */}
      <div className="filter-container">

        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
        </select>

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

      </div>

      {/* Product Cards */}
      <div className="product-container">
        {products.length === 0 ? (
          <h2>No products found</h2>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </>
  );
};

export default ProductList;
