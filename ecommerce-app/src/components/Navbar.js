import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">EasyShop</Link>
      </div>

      <div className="nav-right">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link cart-link">
          Cart
          <span className="cart-count">{cart.length}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
