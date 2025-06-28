import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState, createContext, useEffect } from "react";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const addToCart = (id, quantity, price) => {
    // add to cart logic (this adds to cartItems)
    console.log(id, quantity, price);

    setCartItems((prev) => {
      const currentItem = prev[id] || { quantity: 0, price: price };
      return {
        ...prev,
        [id]: {
          quantity: currentItem.quantity + quantity,
          price: price,
        },
      };
    });
  };

  console.log("Cart items are:");
  console.log(cartItems);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("Server Error");
        }
        return res.json();
      })
      .then((res) => setProducts(res));
  }, []);

  return (
    <>
      <ShopContext.Provider value={{ cartItems, products, addToCart }}>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </ShopContext.Provider>
      <Footer />
    </>
  );
}
