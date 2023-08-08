import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare,FaYoutubeSquare   } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="px-5 md:px-0 bg-[#F1F5F9] py-5">
      <div className="max-w-screen-xl mx-auto md:flex justify-between gap-10">
        <div>
          <h4 className="font-bold text-2xl">DevShop.</h4>
          <p className="text-xs">Copyright © 2023 All Right Reserved by DevShop.</p>
        </div>
        <div className="flex flex-col">
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>Shop</Link>
          <Link href={'/'}>Blog</Link>
          <Link href={'/'}>Contact</Link>
        </div>
        <div className="flex flex-col">
          <Link href={'/'}>Privacy Policy</Link>
          <Link href={'/'}>Trams & Condition</Link>
          <Link href={'/'}>Blog</Link>
          <Link href={'/'}>Login</Link>
        </div>
        <div className="flex  gap-2">
          <Link href={'/'}><FaFacebookSquare size={25}/></Link>
          <Link href={'/'}><FaInstagramSquare size={25}/></Link>
          <Link href={'/'}><FaTwitterSquare size={25}/></Link>
          <Link href={'/'}><FaYoutubeSquare size={25}/></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
