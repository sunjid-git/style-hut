import React from "react";
import "./Category.css";

const Category = (props) => {
  const setCategory = props.setCategory;
  return (
    <div className="category-section">
      <li>
        <a href="#nav" onClick={() => setCategory("electronics")}>
          <i className="fas fa-plug fa-lg"></i>Electornics
        </a>
      </li>
      <li>
        <a href="#nav" onClick={() => setCategory(`men's clothing`)}>
          <i className="fas fa-tshirt fa-lg"></i>Men's Clothing
        </a>
      </li>
      
      <li>
        <a href="#nav" onClick={() => setCategory(`women's clothing`)}>
          <i className="fas fa-vest fa-lg"></i>Women's Clothing
        </a>
      </li>
      <li>
        <a href="#nav" onClick={() => setCategory("jewelery")}>
          <i className="fas fa-gem fa-lg"></i>Jewelery 
        </a>
      </li>
    </div>
  );
};

export default Category;
