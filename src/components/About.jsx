import React from "react";
import { assets } from "../assets/assets";

const Num = (props) => {
  return (
    <div>
      <p className="font-medium text-4xl">{props.prop1}</p>
      <p className="opacity-70">{props.prop2}</p>
    </div>
  );
};

const About = () => {
  return (
    <div id="About" className="scroll-smooth">
      <div className="text-center mt-16">
        <h1 className="font-bold text-4xl">
          About <span className="underline font-light">Our Brand</span>
        </h1>
        <p className="opacity-70 mt-3">
          Passionate About Properties, Dedicated to <br />
          <span>Your Vision</span>
        </p>
      </div>
      <div className="flex justify-center gap-[5rem] mt-16 mb-16 mx-20 items-center flex-wrap md:flex-nowrap">
        <img src={assets.brand_img} className="w-full md:w-1/3" />
        <div className="w-[400px] gap-9 flex flex-col">
          <div>
            <div className="flex gap-20 ">
              <div className="flex flex-col gap-7">
                <Num prop1={"10+"} prop2={"Years of Excellence"} />
                <Num prop1={"12+"} prop2={"Projects Complected"} />
              </div>
              <div className="flex flex-col gap-7">
                <Num prop1={"20+"} prop2={"Mn. Sq. Ft. Delivered"} />
                <Num prop1={"25+"} prop2={"Ongoing Projects"} />
              </div>
            </div>
          </div>
          <p className="opacity-70">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
            atque ea accusantium. Recusandae aperiam voluptate consectetur. Nemo
            nostrum nesciunt inventore
          </p>
          <button className="bg-blue-600 cursor-pointer px-8 rounded py-2 m-auto text-white">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
