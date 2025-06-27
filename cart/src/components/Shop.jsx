import { useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../App";
import "../styles/shop.css"

export default function Shop() {
  const { products, addToCart } = useContext(ShopContext);

  return (
    <>
      <h1>I am the shop</h1>

      <div className="products">
        {products.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
      </div>
    </>
  );
}
