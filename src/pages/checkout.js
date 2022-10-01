import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="checkout">
        <p className="thanks-page"> Checkout</p>
        <span> Thank you for your order</span>
      </div>
      <button className="back-home-btn" onClick={handleClick}>
        Go To Home
      </button>
    </>
  );
};

export default Checkout;
