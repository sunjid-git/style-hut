import React, { useEffect, useState } from "react";
import "./ProductHome.css";
import loadingGif from "../../images/loading.gif";

import AllProduct from "../AllProduct/AllProduct";
import Category from "./Category";

const ProductHome = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('electronics');


  const url = `https://fakestoreapi.com/products`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [url]);


  // category selection
  const matchedCategory = products.filter(product => product.category === category);

  // search product
  const getProduct = (e) => {
    setSearch(e.target.value);
  };


  const getSearchedProducts = matchedCategory.filter((product) =>
    product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  // console.log("searchedProducts", getSearchedProducts);

  return (
    <div className="product-home-page">
      <h1>𝓐𝓵𝓵 𝓟𝓻𝓸𝓭𝓾𝓬𝓽𝓼</h1>

      <div className="search-input">
        <i className="fas fa-search fa-lg"></i>
        <input type="text" onChange={getProduct} placeholder="𝓢𝓮𝓪𝓻𝓬𝓱 𝓟𝓻𝓸𝓭𝓾𝓬𝓽" />
      </div>

      <Category setCategory={setCategory}></Category>

      <div className="loading">
        {loading ? (
          <img src={loadingGif} alt="loading..." className="loading" />
        ) : (
          ""
        )}
      </div>
      <div className="product-show-case">

        {getSearchedProducts.map((product) => (
          <AllProduct key={product.id} product={product}></AllProduct>
        ))}

      </div>
    </div>
  );
};

export default ProductHome;
