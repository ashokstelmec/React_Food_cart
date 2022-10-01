import React from "react";
import { FaUtensils } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/")
  };

  return (
    <div>
      <div className="header">
        <h3>
          <FaUtensils /> &nbsp; &nbsp; Food's Restaurant
        </h3>
      </div>
      <div className="checkout">
        <p className="thanks-page"> Checkout</p>
        <span> Thank you for your order</span>
      </div>
      <button className="buton-3" onClick={handleClick}> Go To Home</button>
    </div>
  );
};

export default Checkout;
