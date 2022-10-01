import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/order");
  };

  return (
    <>
      <div className="welcome-box">
        <h1 className="welcome-msg">Welcome to Food's Kitchen</h1>
        <div className="menu-box">
          <button onClick={handleClick}> GO TO MENU</button>
        </div>
      </div>
    </>
  );
};

export default Home;
