import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Order from "./Pages/Order";
import Checkout from "./Pages/checkout";
import Login from "./Pages/Login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
