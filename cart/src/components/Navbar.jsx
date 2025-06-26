import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaShopify } from "react-icons/fa6";
import { useContext } from "react";
import { ShopContext } from "../App";


export default function Navbar() {
  const { cartItems } = useContext(ShopContext);
  return (
    <nav>
      <NavLink to="/">
        <div className="nav-link-icon-big scalable">
          <FaShopify className="icon-big" />
          <h1>Dom</h1>
        </div>
      </NavLink>

      <div className="nav-middle">
        <NavLink className="scalable" style={{ fontSize: "1.5rem" }} to="/">
          Home
        </NavLink>
        <NavLink className="scalable" style={{ fontSize: "1.5rem" }} to="/shop">
          Shop
        </NavLink>
      </div>

      <NavLink to="/cart" className="nav-link-icon-small scalable">
        <FaShoppingCart className="icon-small" />
        <span>Cart</span>
        {/* Here I'll need to have the total number of items in the cart */}
        <span>{cartItems.length}</span>
      </NavLink>
    </nav>
  );
}
