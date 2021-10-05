import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <h1>𝓛𝓸𝓰𝓲𝓷</h1>

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
          𝓛𝓸𝓰 𝓘𝓷
        </Link>
    </div>
  );
};

export default Login;
