import React from "react";
import "./AllProduct.css";

const AllProduct = (props) => {
  const { title, image, price, category, rating } = props.product;
  console.log("product", props.product);

  return (
    <div className="single-product">
      <img src={image} alt="" />
      <h4>{title}</h4>
      <p>
        Price:<strong>$ {price}</strong>
      </p>
      <p>
        Category: <strong> {category}</strong>
      </p>
    </div>
  );
};

export default AllProduct;
