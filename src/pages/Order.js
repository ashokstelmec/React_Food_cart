import React, { useState } from "react";
import feeds from "../data/feeds.json";
import { useNavigate } from "react-router-dom";
import Card from "../components/card";

const Order = () => {
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  const handleOrderFood = (e) => {
    navigate("/checkout");
  };

  const handleCart = (item) => {
    /* 
      If Element exists in the cart then don't do anything else 
      push it into the cart
      Check for existence of an item in an array: cart.indexOf(item)
      if item exists then it will give us any index but not -1 .
      -1 not equals to -1 means - element exists in the cart.
    */
    if (cart.indexOf(item) !== -1) {
      return;
    }
    setCart((prev) => [...prev, item]);
  };

  const handleCount = (item, d) => {
    const index = cart.indexOf(item); //  index
    // first time -1 bcoz it is not yet exists as its not yet pushed into cart array
    if (index === -1) return;
    const arr = cart;
    arr[index].quantity += d;
    setCart([...arr]);
  };

  return (
    <>
      <div className="card-list">
        {feeds.map((el) => (
         <Card item={el} handleCart={handleCart} handleCount={handleCount} key={el.name}/>
        ))}
      </div>
      <div className="order-food">
        <button type="submit" onClick={handleOrderFood}>
          Order Food
        </button>
      </div>
    </>
  );
};

export default Order;
