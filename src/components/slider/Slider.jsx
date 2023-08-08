"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    heading: "Code with style",
    title: "Coding Swag for the Modern Programmer",
    image: "https://i.ibb.co/0jTQcMY/vscode.jpg",
    description:
      "We have a wide variety of designs to choose from, so you're sure to find the perfect one to match your personality. Our t-shirts are made from high-quality materials and are comfortable to wear, so you can code all day long without feeling weighed down.",
  },
  {
    id: 2,
    heading: "The future is code",
    title: "Wear your passion for coding on your sleeve",
    image: "https://i.ibb.co/Wn4Pzy9/react.jpg",
    description: "We have a wide variety of designs to choose from, so you're sure to find the perfect one to match your personality. Our t-shirts are made from high-quality materials and are comfortable to wear, so you can code all day long without feeling weighed down."
  },
  {
    id: 3,
    heading: "Coding is magic",
    title: "Programmer T-Shirts That Will Make You Smile",
    image: "https://i.ibb.co/CtX4wpw/nodejs.jpg",
    description: "We have a wide variety of designs to choose from, so you're sure to find the perfect one to match your personality. Our t-shirts are made from high-quality materials and are comfortable to wear, so you can code all day long without feeling weighed down."
  },
  {
    id: 4,
    heading: "I love to code",
    title: "Coding T-Shirts That Will Make You Stand Out",
    image: "https://i.ibb.co/yhwMwH4/github.jpg",
    description: "We have a wide variety of designs to choose from, so you're sure to find the perfect one to match your personality. Our t-shirts are made from high-quality materials and are comfortable to wear, so you can code all day long without feeling weighed down."
  },
  {
    id: 5,
    heading: "The future is code",
    title: "The Best Programmer T-Shirts on the Internet",
    image: "https://i.ibb.co/sJJjNB5/google-cloud.jpg",
    description: "We have a wide variety of designs to choose from, so you're sure to find the perfect one to match your personality. Our t-shirts are made from high-quality materials and are comfortable to wear, so you can code all day long without feeling weighed down."
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="py-20 px-5 md:px-0 bg-slate-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="md:flex items-center gap-10 justify-between">
          {/* Text Content  */}
          <div className="md:w-1/2">
            <p className="text-[#38BDF8]">{data[currentSlide].heading}</p>
            <h3 className="text-5xl font-bold py-10">{data[currentSlide].title}</h3>
            <p className="text-[#6E7092]">{data[currentSlide].description}</p>
          </div>
          {/* Image Content  */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="flex justify-center md:justify-end relative">
                <div className="h-[450px] w-[400px] bg-[#38BDF8] blur-lg rounded-full absolute"></div>
              <Image
                src={data[currentSlide].image}
                alt="img"
                height={500}
                width={400}
                className="z-10 hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
