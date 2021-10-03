import React, { useEffect, useState } from "react";
import "./ProductHome.css";
import loadingGif from "../../images/loading.gif";

import AllProduct from "../AllProduct/AllProduct";

const ProductHome = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const url = `https://fakestoreapi.com/products`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [url]);

  // search product
  const getProduct = (e) => {
    setSearch(e.target.value);
  };

  const getSearchedProducts = products.filter((product) =>
    product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  // console.log("searchedProducts", getSearchedProducts);

  return (
    <div className="product-home-page">
      <h1>All Products</h1>
      <input
        type="text"
        onChange={getProduct}
        placeholder="Search Product Here..."
      />

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
