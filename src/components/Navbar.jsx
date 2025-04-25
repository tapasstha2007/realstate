import React, { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-10 pt-4">
      <div className="flex justify-between mx-8 items-center h-full">
        <img src={assets.logo} alt="logo" />
        <ul className="hidden md:flex gap-10">
          <a
            href="#Header"
            className="text-white cursor-pointer hover:text-gray-400"
          >
            Home
          </a>
          <a
            href="#About"
            className="text-white cursor-pointer hover:text-gray-400"
          >
            About
          </a>
          <a
            href="#Projects"
            className="cursor-pointer text-white hover:text-gray-400"
          >
            Projects
          </a>
          <a
            href="#Testimonial"
            className="cursor-pointer text-white hover:text-gray-400"
          >
            Testimonial
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
        <img
          onClick={() => setIsOpen(true)}
          src={assets.menu_icon}
          className="md:hidden"
        />
      </div>
      <div
        className={`md:hidden fixed w-screen h-full top-0 right-0 bottom-0 bg-white ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ transition: isOpen ? "opacity 0.5s" : "none" }}
      >
        <div className="flex justify-end p-6">
          <img
            onClick={() => setIsOpen(false)}
            src={assets.cross_icon}
            className="w-6"
          />
        </div>
        <ul className="flex flex-col gap-5 mt-10 text-center md:hidden text-lg font-bold w-screen">
          <a onClick={() => setIsOpen(false)} href="#Header">
            Home
          </a>
          <a onClick={() => setIsOpen(false)} href="#About">
            About
          </a>
          <a onClick={() => setIsOpen(false)} href="#Projects">
            Projects
          </a>
          <a onClick={() => setIsOpen(false)} href="#Testimonials">
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
