import React, { useState } from "react";
import { FaUtensils } from "react-icons/fa";
import feeds from "../data/feeds.json";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [showOrder, setShowOrder] = useState(false);
  const [cost, setCost] = useState({
    total: "Total:",
    rate: "Cost (INR):",
  });

  const navigate = useNavigate();

  const handleClick = (e) => {
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
    setCart((prev) => [...prev, { ...item, quantity: 0 }]);
  };

  const handleCount = (item, d) => {
    const index = cart.indexOf(item); //  index
    // first time -1 bcoz it is not yet exists as its not yet pushed into cart array
    const arr = cart;
    arr[index].quantity += d;
    if (arr[index]?.quantity === 0) arr[index].quantity = 1;
    setCart([...arr]);
  };
  console.log(cart);

  return (
    <>
      <div className="header">
        <h3>
          <FaUtensils /> &nbsp; &nbsp; Food's Restaurant
        </h3>
      </div>
      <div className="card-list">
        {feeds.map((el) => (
          <div className="card" key={el.name} onClick={() => handleCart(el)}>
            <img src={`/img/${el.image}`} alt="fries" />
            <div className="price">
              <p className="food">{el.name}</p>
              <p className="rate"> Price: {el.price}</p>
              {showOrder ? (
                <div className="main-order">
                  <div className="total-item">
                    {cost.total} {count}
                  </div>
                  <div className="food-price">
                    {cost.rate} {count * el.price}
                  </div>
                </div>
              ) : null}
              <button
                type="submit"
                className="buton1"
                onClick={() => handleCount(el, 1)}
              >
                +
              </button>
              &nbsp; &nbsp;
              <button
                type="submit"
                className="buton2"
                onClick={() => handleCount(el, -1)}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="order-1">
        <button type="submit" onClick={handleClick}>
          Order Food
        </button>
      </div>
    </>
  );
};

export default Order;
