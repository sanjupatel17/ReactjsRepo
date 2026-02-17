import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title.substring(0, 40)}...</h3>
      <p className="price">${product.price}</p>

      <div className="btn-group">
        <Link to={`/product/${product.id}`} className="btn-view">
          View
        </Link>
        <button onClick={() => addToCart(product)} className="btn-cart">
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
