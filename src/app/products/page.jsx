"use client";
import ProductCart from "@/components/ProductCart";
import React, { useEffect, useState } from "react";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data.json");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  console.log(products);

  return (
    <div className="pb-20 px-5 md:px-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center">
          <h4 className="text-xl">Collection of This Month</h4>
          <p className="text-[#6E7092]">Choose your t-shirt as you like</p>
        </div>

        <div className="grid md:grid-cols-4 items-center justify-center gap-10">
          {products.slice(0,8).map((item) => (
            <ProductCart key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
