import React, { useState } from "react";



function Cart({ cartItems, onClose }) {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform email validation
    if (validateEmail(email)) {
      // Proceed with payment
      console.log("Email:", email);
      // Close the cart
      onClose();
    } else {
      // Show error message or handle invalid email
      setIsEmailValid(false);
    }
  };

  const validateEmail = (email) => {
    // Basic email validation
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  return (
    <div className="cart-overlay">
      <div className="cart">
        <button onClick={onClose} className="close-btn">
          Close
        </button>
        <h2>Shopping Cart</h2>
        <ul style={{ display: "flex" }}>
          {cartItems.map((item, index) => (
            <div key={index}>
              <li key={index}>{item.title}</li>
              <img width="10%" src={item.image} />
            </div>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {!isEmailValid && (
              <span className="error">Please enter a valid email address.</span>
            )}
          </div>
          <button type="submit">Proceed to Checkout</button>
        </form>
      </div>
    </div>
  );
}

export default Cart;
