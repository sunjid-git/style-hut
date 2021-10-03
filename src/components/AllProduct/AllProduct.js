import React from "react";
import { Link } from "react-router-dom";
import "./AllProduct.css";


const AllProduct = (props) => {
  
  const {id, title, image, price, category, rating } = props.product;

//   console.log("product", props.product);
// console.log("all pro - ", id);

  return (
    <div className="single-product">
      <img src={image} alt="" />
      <h4>{title}</h4>
      <p className="price">
        <strong>Price: </strong>{price}<sup>$</sup>
      </p>
      <p>
        Category: <strong> {category}</strong>
      </p>

 

      <Link to={`/products/${id}`}
      className="product-btn">See Details</Link>


      

      {
          rating.rate <5 ? <div className="rating">
      <i className="fas fa-star fa-lg"></i>
      <i className="fas fa-star fa-lg"></i>
      <i className="fas fa-star fa-lg"></i>
      <i className="fas fa-star fa-lg"></i>
      <i className="fas fa-star-half fa-lg"></i>
      </div> : ""
      }
    </div>
  );
};

export default AllProduct;
