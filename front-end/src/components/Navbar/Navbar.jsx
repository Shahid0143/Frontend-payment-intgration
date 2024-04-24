import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import Cart from "../Cart";
import "../Navbar/Navbar.css";

function Navbar({ cartItemsCount, cartItems }) {
  // Receive cartItems from props
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <nav>
        <ul className="nav-box">
          <li>Home</li>
          <li>
            <CiShoppingCart onClick={toggleCart} />({cartItemsCount})
          </li>
        </ul>
      </nav>
      {showCart && <Cart onClose={toggleCart} cartItems={cartItems} />}
     
    </>
  );
}

export default Navbar;
