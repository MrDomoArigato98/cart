import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

export default function App() {
  const [cartItems, setCartItems] = useState(["Shirt", "Trousers"]);
  const products =
    []; /* some custom hook that fetches products and returns the fetched products */

  const addToCart = () => {
    // add to cart logic (this adds to cartItems)
  };
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
