import React from "react";
import Navbar from "./Navbar";
import "../index.css";

const Hero = () => {
  return (
    <div
      className="boooty w-full bg-cover min-h-screen flex bg-center overflow-hidden"
      id="Header"
    >
      <Navbar />

      <div className="flex justify-center  flex-col text-center w-full">
        <h1 className="text-white text-5xl sm:text-5xl md:text-6xl fonty font-bold pt-[5rem] max-w-3xl mx-auto">
          Explore homes that fit your dreams
        </h1>
        <div className="mt-16 space-x-6">
          <a
            href="#Projects"
            className="bg-transparent border-white b text-white px-8 py-2 rounded border"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="bg-blue-500 text-white  px-8 py-2 rounded"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
