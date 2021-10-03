import React from "react";
import "./AllProduct.css";

const AllProduct = (props) => {
  const { title, image, price, category, rating } = props.product;
  console.log("product", props.product);

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
      <button className="see-product-details product-btn">Product Details</button>

      {
          rating.rate <5 ? <div className="rating">
      <i class="fas fa-star fa-lg"></i>
      <i class="fas fa-star fa-lg"></i>
      <i class="fas fa-star fa-lg"></i>
      <i class="fas fa-star fa-lg"></i>
      <i class="fas fa-star-half fa-lg"></i>
      </div> : ""
      }
    </div>
  );
};

export default AllProduct;
