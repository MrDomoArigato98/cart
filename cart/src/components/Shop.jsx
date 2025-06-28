import { useEffect, useContext, useState } from "react";
import { ShopContext } from "../App";
import "../styles/shop.css";

export default function Shop() {
  const { products, addToCart } = useContext(ShopContext);

  const [quantities, setQuantities] = useState({});

  console.log(quantities);
  function handleInputChange(id, value) {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed) && parsed > 0) {
      setQuantities((prev) => ({
        ...prev,
        [id]: parsed,
      }));
    }
  }

  function handleDecrement(id) {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  }
  function handleIncrement(id) {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  }

  function displayProductCards() {
    return products.map((item) => (
      <div className="item" key={item.id}>
        <img src={item.image} alt="" />
        <p className="item-title">{item.title}</p>
        <p className="item-price">€{item.price}</p>
        <div className="quantity-input">
          <button
            onClick={() => handleDecrement(item.id)}
            className="round-button"
          >
            -
          </button>
          <input
            type="number"
            value={quantities[item.id] || 1}
            min="1"
            onChange={(e) => handleInputChange(item.id, e.target.value)}
          />
          <button
            onClick={() => handleIncrement(item.id)}
            className="round-button"
          >
            +
          </button>
        </div>
      </div>
    ));
  }

  return (
    <>
      <h1>Explore SSD drives and ultra fast displays</h1>
      <div className="catalog">
        <div className="products">{displayProductCards()}</div>
      </div>
    </>
  );
}
