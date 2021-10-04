import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="nav-elements">
        <h1>𝓢𝓽𝔂𝓵𝓮 𝓗𝓾𝓽 </h1>

        <div className="nav-links">
         
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Login</Link>
        
        </div>

      </div>
    </header>
  );
};

export default Header;
