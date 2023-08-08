'use client'
import React, { useEffect, useState } from "react";

const Product = ({ params }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  console.log(params);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data.json");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  const product = products.find((item) => item.id === parseInt(params.id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
    </div>
  );
};

export default Product;
