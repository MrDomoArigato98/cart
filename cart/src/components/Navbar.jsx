import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import cart from "../assets/cart.svg";
import { FaShoppingCart } from "react-icons/fa";
export default function Navbar() {
  return (
    <nav>
      <span>Dom-store.com</span>
      <div className="nav-middle">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
      </div>

      <NavLink to="/cart" className="nav-link-icon">
        <FaShoppingCart className="icon" />
        <span>Cart</span>
      </NavLink>
    </nav>
  );
}
