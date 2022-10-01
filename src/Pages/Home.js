import React from 'react';
import { FaUtensils } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Home = () => {
  
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate('/order');
  }

  return (
    <div className='header'>
      <h3> <FaUtensils /> &nbsp; &nbsp; Food's Restaurant</h3>
        <p className='food'>Welcome to Food's </p>
        <p className='kitchen'>Kitchen</p>
        <div className='buton'>
          <button onClick={handleClick} > GO TO MENU</button>
        </div>
    </div>
  )
}

export default Home