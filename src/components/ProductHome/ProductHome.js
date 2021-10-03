import React, { useEffect, useState } from "react";

import AllProduct from "../AllProduct/AllProduct";

const ProductHome = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const url = `https://fakestoreapi.com/products`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // console.log(data);
      });
  }, []);

  // search product
  const getProduct = (e) => {
    setSearch(e.target.value);
  };

  const getSearchedProducts = products.filter((product) =>
  product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  console.log('searchedProducts', getSearchedProducts);

  return (
    <div>
      <h1>Total Existing Products: {products.length}</h1>

      <input
        type="text"
        onChange={getProduct}
        placeholder="Search Product..."
      />

      <div className="product-show-case">
        {getSearchedProducts.map((product) => (
          <AllProduct key={product.id} product={product}></AllProduct>
        ))}
      </div>
    </div>
  );
};

export default ProductHome;
