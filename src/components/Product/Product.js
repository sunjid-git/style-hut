import React, { useState, useEffect } from "react";
import "./Product.css";
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
  }, [url]);

  const { image, title, description, category, price } = products;
  return (
    <>
      <div className="separate-product">
        <h1>{title}</h1>
        <div className="single-product-inner">
          <div className="product-left">
            <img src={image} alt="" />
          </div>

          <div className="product-right">
            <h3>
              <strong>Category: </strong> {category}
            </h3>

            <p> {description}</p>

            <h3 className="product-price">
              Price: {price} <sup>$</sup>
            </h3>

            <div>
              <Link to="/" className="product-btn">
                <i class="fas fa-cart-plus fa-lg"></i>
                Order Now
              </Link>
            </div>
          </div>
        </div>

        <div className="back-btn">
          <Link to="/" className="product-btn">
            <i class="far fa-hand-point-left fa-lg"></i>
            Previous Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;
