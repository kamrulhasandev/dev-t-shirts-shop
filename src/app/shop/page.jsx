"use client";
import ProductCart from "@/components/ProductCart";
import React, { useEffect, useState } from "react";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortBy, setSortBy] = useState("Default");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data.json");
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const searchResults = products.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(searchResults);
  }, [searchTerm, products]);

  useEffect(() => {
    const sortedProductsCopy = [...filteredProducts];
    sortedProductsCopy.sort((a, b) => {
      if (sortBy === "Low to High") {
        return a.price - b.price;
      } else if (sortBy === "High to Low"){
        return b.price - a.price;
      }else{
        return ;
      }
    });
    setFilteredProducts(sortedProductsCopy);
  }, [sortBy, products]);

  return (
    <div className="py-20 px-5 md:px-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center pb-5">
          <h4 className="text-xl">Collection of This Month</h4>
          <p className="text-[#6E7092]">Choose your t-shirt as you like</p>
        </div>

        <div className="md:flex  justify-between py-5">
          <div className="flex flex-col items-center">
            <input
            className="border-2 px-2 py-1"
              type="search"
              placeholder="search here"
              name=""
              id=""
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <form className="flex flex-col items-center">
            <div>
            <label htmlFor="Sort by Price">Sort by Price:</label>
            <select
              name="Sort by Price"
              id="Sort by Price"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="Default">Default</option>
              <option value="Low to High">Low to High</option>
              <option value="High to Low">High to Low</option>
            </select>
            </div>
          </form>
        </div>

        <div className="grid md:grid-cols-4 items-center justify-center gap-10">
          {filteredProducts.map((item) => (
            <ProductCart key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
