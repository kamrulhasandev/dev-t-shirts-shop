'use'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartPlus, FaEye } from "react-icons/fa";

const ProductCart = ({ item }) => {
  const { id, name, image, price, rating } = item;

  return (
    <div>
      <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <Image src={image} width={300} height={400} alt={name} />
        <div className="text-center py-3">
          <h5 className="font-bold">{name}</h5>
          <div className="flex justify-around items-center py-2">
            <p>$ {price}</p>
            <p>{rating}</p>
          </div>
          <div className="flex justify-around">
            <button className="border text-black px-3 py-1 rounded-md">
              <FaCartPlus />
            </button>
            <Link href={`/products/${id}`}>
            <button className="border-2 text-black px-3 py-1 rounded-md">
              <FaEye />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
