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
  const [cartItems, setCartItems] = useState(["Shirt", "Trousers"]);
  const [products, setProducts] = useState([]);

  const addToCart = () => {
    // add to cart logic (this adds to cartItems)
  };

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
    
    console.log(products);
  
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
