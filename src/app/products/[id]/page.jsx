"use client";
import Image from "next/image";
import Zoom from "react-img-zoom";
import React, { useEffect, useState } from "react";

const Product = ({ params }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

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
    <div className="py-20 px-5 md:px-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="md:flex gap-10">
          <div className="hover:cursor-pointer">
            <div className="hidden md:block">
            <Zoom img={product.image} zoomScale={3} width={500} height={600}/>
            </div>
            <div className="block md:hidden">
              <Image src={product.image} alt="image" width={500} height={600}/>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-5">
              <h3 className="text-3xl font-bold text-[#555555]">
                {product.name}
              </h3>
              <h5 className="text-xl"> Price: $ {product.price}</h5>
              <p>{product.description}</p>
            </div>
            <div className="flex gap-5 pt-5">
              <button className="bg-yellow-600 px-3 py-1 text-white">Add To Cart</button>
              <button className="bg-green-600 px-3 py-1 text-white">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
