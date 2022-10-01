import React from "react";
import { FaUtensils } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/order");
  };

  return (
    <div className="header">
      <h3>
        <FaUtensils />
        <span className="restaurant-name"> Food's Restaurant</span>
      </h3>
      <p className="food">Welcome to Food's </p>
      <p className="kitchen">Kitchen</p>
      <div className="menu-box">
        <button onClick={handleClick}> GO TO MENU</button>
      </div>
    </div>
  );
};

export default Home;
