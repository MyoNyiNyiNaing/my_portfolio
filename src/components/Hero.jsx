import React from "react";
import Button from "./Button";
import { FiArrowRight } from "react-icons/fi";
import profile from "../assets/profile-removebg-preview.png";
const Hero = () => {
  return (
    <div id="home" className="max-w-[1215px] px-5 mx-auto">
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-[800px] mx-auto lg:w-[650px] mb-[100px] lg:mb-0">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="100"
            className="text-title_sm md:text-hero_title font-[700] tracking-tighter mb-8 "
          >
            <span className="text-transparent bg-clip-text leading-[100%] bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500">
              I create products
            </span>{" "}
            <br />
            that delight and inspire people.
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="200"
            className="max-w-[600px] text-base_sm md:text-base font-[500] mb-10 text-gray-500 tracking-tight"
          >
            Hi! I’m Jake, a frontend developer based in Yangon,Myanmar. I create
            user-friendly interfaces for fast-growing startups.
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="300"
            className="flex flex-col  md:flex-row items-start md:items-center gap-5 ps-2"
          >
            <Button text={"Book a call"} />
            <div className="group flex items-center gap-3 font-[700] cursor-pointer">
              <p>Download CV </p>{" "}
              <FiArrowRight className="group-hover:translate-x-2 transition-all duration-300 ease-in-out" />
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="100"
          className="mx-auto"
        >
          <img src={profile} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
