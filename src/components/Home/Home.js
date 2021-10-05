import React from "react";
import "./Home.css";
import ProductHome from "../ProductHome/ProductHome";
import illustration from "../../images/illustration.png";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <div>
        <div className="home-page">
          <div className="product-home-page-inner">
            <div className="home-div">
              <h1>We care our Clients</h1>
              <p>
                Visit and be a part of our family. Enjoy the premium quality
                products with special discount coupon only waiting for you.
              </p>
              <Link to="/ProductHome" className="product-btn">
                <i className="fas fa-globe"></i>
                𝓥𝓲𝓼𝓲𝓽 𝓝𝓸𝔀
              </Link>
            </div>
            <div className="home-div">
              <figure>
                <div className="img-area">
                  <img src={illustration} alt="illustration" />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <ProductHome></ProductHome>
      <Contact></Contact>
    </>
  );
};

export default Home;
