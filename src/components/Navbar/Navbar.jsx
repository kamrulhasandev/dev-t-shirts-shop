import Link from "next/link";
import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const navLinks = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Shop",
    url: "/shop",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "FAQ",
    url: "/faq",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center py-2">
        <div>
          <h4 className="font-extrabold text-2xl">DevShop.</h4>
        </div>
        <div className="flex gap-8">
          {navLinks.map((item) => (
            <Link href={item.url} key={item.id}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-5 text-xl">
          <Link href="/">
            <FaShoppingCart />
          </Link>
          <Link href="/">
            <FaUser />
          </Link>
        </div>
      </div>
      </div>
  );
};

export default Navbar;
