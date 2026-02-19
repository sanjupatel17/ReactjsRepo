import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title.substring(0, 40)}...</h3>
      <p className="price">₹ {product.price}</p>
      <p className="category">{product.category}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
