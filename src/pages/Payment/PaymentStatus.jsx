import React from "react";
import { Link } from "react-router-dom";

const PaymentStatus = () => {
  return (
    <div className="max-w-xl mx-auto mt-32 flex justify-center items-center border shadow">
      <div className="h-52 p-12 flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-green-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>

        <h1 className="text-lg font-medium mb-3 mt-1">Payment succeeded</h1>
        <Link to="/" className="link link-hover">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentStatus;
