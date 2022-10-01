import React from "react";
import { FaUtensils } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="header">
        <h3>
          <FaUtensils />
          <span className="restaurant-name"> Food's Restaurant</span>
        </h3>
      </div>
      <div className="checkout">
        <p className="thanks-page"> Checkout</p>
        <span> Thank you for your order</span>
      </div>
      <button className="back-home-btn" onClick={handleClick}>
        Go To Home
      </button>
    </div>
  );
};

export default Checkout;
