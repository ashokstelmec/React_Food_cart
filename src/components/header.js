import React from "react";
import { FaUtensils } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <h3>
        <FaUtensils />
        <span className="restaurant-name"> Food's Restaurant</span>
      </h3>
    </div>
  );
};

export default Header;
