import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <h1>ππΈπ°π²π·</h1>

      <form action="">
        <div>
          <i class="fas fa-envelope fa-lg"></i>
          <input type="text" placeholder="Your Name" />
        </div>

        <div>
          <i class="fas fa-lock fa-lg"></i>
          <input type="email" placeholder="Your Email" />
        </div>

        

      </form>
      <Link to="/" className="product-btn">
          <i class="fas fa-key"></i>
          ππΈπ° ππ·
        </Link>
    </div>
  );
};

export default Login;
