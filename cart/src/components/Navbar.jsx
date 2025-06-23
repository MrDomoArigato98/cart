import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { FaShoppingCart } from "react-icons/fa";
export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <h1 className="scalable">Dom-store.com</h1>
      </NavLink>

      <div className="nav-middle">
        <NavLink className="scalable" style={{fontSize:"1.5rem"}} to="/">Home</NavLink>
        <NavLink className="scalable" style={{fontSize:"1.5rem"}} to="/shop">Shop</NavLink>
      </div>

      <NavLink  to="/cart" className="nav-link-icon scalable">
        <FaShoppingCart className="icon" />
        <span>Cart</span>
      </NavLink>
    </nav>
  );
}
