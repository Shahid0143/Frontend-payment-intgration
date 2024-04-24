import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51NNhL6SBC9dHi2gZvjypAQhiWpu9InFmEzUOntBjL0RxypjBQK0KmsG2Wi009ONSflGGJgGo57JBLnjChGeN7Ekh00Un9btlhp"
);

const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;
