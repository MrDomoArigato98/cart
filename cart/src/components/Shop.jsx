import { useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../App";
import "../styles/shop.css";

export default function Shop() {
  const { products, addToCart } = useContext(ShopContext);

  return (
    <>
      <h1>I am the shop</h1>

      <div className="catalog">
        <div className="products">
          {products.map((item) => {
            return (
              <div className="item" key={item.id}>
                <img src={item.image} width={300} height="auto" alt="" />
                <p className="item-title">{item.title}</p>
                <p className="item-description"> {item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
