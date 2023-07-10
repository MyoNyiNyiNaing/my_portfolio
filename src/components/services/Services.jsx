import React from "react";
import { services } from "./services";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="max-w-[1098px] py-[80px] mx-[21px] md:mx-auto flex flex-col justify-center">
      <div className=" text-center">
        <div className=" inline-block transform translate-x-0 translate-y-0 translate-z-0 scale-x-100 scale-y-100 scale-z-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d">
          <h6 className=" text-transparent bg-clip-text leading-[100%] bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 inline-block font-bold text-base uppercase tracking-[4px]">
            Services
          </h6>
        </div>
        <div className=" max-w-[810px] mt-[20px] mb-[110px] text-center mx-auto">
          <h2 className="text-[36px] md:text-[40px] lg:text-title font-bold leading-[110%] tracking-[1px]">
            Design that solves problems, one product at a time.
          </h2>
        </div>
      </div>

      <div className="grid items-center w-full grid-cols-1 md:grid-cols-3 grid-rows-auto gap-x-[90px] gap-y-[70px] md:gap-y-4">
        {services.map((service) => (
          <ServicesCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;