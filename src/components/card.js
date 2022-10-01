import React from "react";

const Card = ({ item, handleCart, handleCount }) => {
  return (
    <div className="card" key={item.name} onClick={() => handleCart(item)}>
      <img src={`/img/${item.image}`} alt={item.name} />
      <div className="price">
        <p className="food">{item.name}</p>
        <p className="rate"> Price: {item.price}</p>
        {item.quantity > 0 && (
          <div className="main-order">
            <div className="total-item">Total: {item.quantity}</div>
            <div className="food-price">
              Cost (INR): {item.quantity * item.price}
            </div>
          </div>
        )}
        <button
          type="submit"
          className="increment-btn"
          onClick={() => handleCount(item, 1)}
        >
          +
        </button>
        <button
          type="submit"
          className="decrement-btn"
          onClick={() => handleCount(item, -1)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Card;
