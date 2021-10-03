import React, { useState, useEffect } from "react";
import './Product.css';
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  console.log("title", id);
  // console.log("title",typeof id);

  const [products, setProducts] = useState([]);

  const url = `https://fakestoreapi.com/products/${parseInt(id)}`;
  // console.log("URL - ",url);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log("data", data);
      });
  }, []);

  const { image, title, rating, description, category, price } = products;
  return (
    <div className="single-product">
      <div className="single-product-inner">
        <div className="product-left">
          <img src={image} alt="" />
        </div>

        <div className="product-right">
          <h3>{title}</h3>
          <h3>{description}</h3>
          <h3>{category}</h3>
          <h3>{price}</h3>

{/* 
          <div>
          {rating.rate < 5 ? (
            <div className="rating">
              <i className="fas fa-star fa-lg"></i>
              <i className="fas fa-star fa-lg"></i>
              <i className="fas fa-star fa-lg"></i>
              <i className="fas fa-star fa-lg"></i>
              <i className="fas fa-star-half fa-lg"></i>
            </div>
          ) : (
            ""
          )}
          </div> */}

        </div>
      </div>
      <Link to="/" className="product-btn">
        Go Back
      </Link>
    </div>
  );
};

export default Product;
