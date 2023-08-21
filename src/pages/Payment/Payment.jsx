import React, { useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import CartContext from "../../context/cartContext";
// import "./App.css";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

export default function Payment() {
  const [clientSecret, setClientSecret] = useState("");
  const { cart } = useContext(CartContext);

  useEffect(() => {
    const product = cart.map((item) => ({
      ...item,
      price: item.price + 5,
    }));
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:9000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product,
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [cart]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="max-w-xl mx-auto mt-28 border p-5 shadow-md rounded-sm">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
