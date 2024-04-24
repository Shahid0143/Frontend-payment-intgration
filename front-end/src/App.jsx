import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/product/Product";
import Checkout from "./components/Checkout";
function App() {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Add the product to the cartItems array
    setCartItems([...cartItems, product]);
    // Update the count of items in the cart
    setCartItemsCount(cartItems.length + 1);
  };

  return (
    <div>
      <Navbar cartItemsCount={cartItemsCount} cartItems={cartItems} />
      {/* Pass cartItems to Navbar */}
      <Product addToCart={addToCart} />
      <Checkout/>
    </div>
  );
}

export default App;
