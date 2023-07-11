import React from "react";
import Button from "./Button";
import {FiArrowRight} from "react-icons/fi";

const Hero = () => {
  return (
    <div id="hero" className="max-w-[1215px] px-5 mx-auto">
      <div className="flex flex-wrap justify-between items-center">
      <div className="w-[650px]">
        <h1 className="text-title_sm md:text-hero_title font-[700] tracking-tighter mb-8 ">
          <span className="text-transparent bg-clip-text leading-[100%] bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500">I create products</span> <br />
          that delight and inspire people.
        </h1>
        <p className="max-w-[600px] text-base_sm font-[500] mb-10 text-gray-500 tracking-tight">
          Hi! I’m Jake, a frontend developer based in Yangon,Myanmar. I create
          user-friendly interfaces for fast-growing startups.
        </p>
        <div className="flex flex-col  md:flex-row items-start md:items-center gap-5 ps-2">
          <Button text={"Book a call"}/>
          <div className="group flex items-center gap-3 font-[700] cursor-pointer"><p>Download CV </p> <FiArrowRight className="group-hover:translate-x-2 transition-all duration-300 ease-in-out"/></div>
        </div>
      </div>
      <div>
        <img
          src="https://assets.website-files.com/5fef5619b640934b33c2385e/60ad1c2b0e1d633fc7ef2e69_Group%20160-min-p-500.jpeg"
        />
      </div>
    </div>
    </div>
    
  );
};

export default Hero;
