import React, { useState } from "react";
import { FaUtensils } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      return;
    }

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("Success:", data);
        localStorage.setItem("AUTH_TOKEN", JSON.stringify(data));
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="header">
        <h3>
          <FaUtensils />
          <span className="restaurant-name"> Food's Restaurant</span>
        </h3>
      </div>

      <div className="login-form">
        <h1>Login Page</h1>
        <form>
          <div className="form-group">
            <input
              type="text"
              minLength="8"
              maxLength="29"
              pattern=".*.com"
              required
              name="email"
              placeholder="Username"
              className="form-control"
              onChange={handleChange}
              value={email}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              minLength="8"
              maxLength="25"
              required
              name="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={handleChange}
            />
          </div>

          <div className="login-button">
            <button type="submit" onClick={handleClick}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
