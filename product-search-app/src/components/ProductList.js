import React from "react";

function ProductList({ products }) {
  return (
    <div className="product-grid">
      {products.length === 0 ? (
        <h3 className="no-result">No Products Found 😢</h3>
      ) : (
        products.map((product) => (
          <div key={product.id} className="card">
            <h2>{product.name}</h2>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
