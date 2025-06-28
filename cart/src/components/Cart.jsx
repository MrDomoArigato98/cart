import { useEffect, useContext, useState, use } from "react";
import { ShopContext } from "../App";

export default function Cart() {
  const { cartItems, products } = useContext(ShopContext);

  function getTotal() {
    var total = 0;
    Object.entries(cartItems).map(([id, { quantity, price }]) => {
      console.log(price);
      total += parseInt(price) * quantity;
    });
    console.log("total is " + total);

    return total;
  }
  return (
    <>
      <p>Cart Total is: €{getTotal()}</p>
    </>
  );
}
