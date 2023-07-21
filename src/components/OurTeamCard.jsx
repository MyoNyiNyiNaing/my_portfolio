import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const OurTeamCard = ({member}) => {
  return (
    <div className=" space-y-8 max-w-[400px] sm:mx-auto mx-5">
      <div className=" rounded-[20px] overflow-hidden">
        <img
          className="rounded-[20px] max-w-[350px] h-[400px] object-cover  hover:scale-110 transition duration-500"
          src={member.image}
          alt=""
        />
      </div>
      <div className="  flex flex-col items-center">
        <h1 className=" dark:text-white text-[#191919] font-[500] text-[26px] mb-3">
          {member.name}
        </h1>
        <p className=" dark:text-gray-300 text-[16px] font-[400] text-[#898989] mb-5 tracking-wider">
           Junior Frontend Developer
        </p>
        <div className=" flex items-center">
          <div className=" -mr-7 group">
            <FaFacebookF className=" cursor-pointer hover:text-[#898989] text-lg transition duration-500" />
            <div className=" mt-2 p-1 text-sm border-t border-l border-gray-400 text-gray-500 opacity-0 group-hover:opacity-100 transition duration-500 cursor-pointer ">
              facebook
            </div>
          </div>
          <div className="-mr-5 group">
            <FaLinkedinIn className=" cursor-pointer hover:text-[#898989] text-lg transition duration-500" />
            <div className=" mt-2 p-1 text-sm border-t border-l border-gray-400 text-gray-500 opacity-0 group-hover:opacity-100 transition duration-500 cursor-pointer">
              linkedin
            </div>
          </div>
          <div className="-mr-7 group">
            <FaTwitter className=" cursor-pointer hover:text-[#898989] text-lg transition duration-500" />
            <div className=" mt-2 p-1 text-sm border-t border-l border-gray-400 text-gray-500 opacity-0 group-hover:opacity-100 transition duration-500 cursor-pointer">
              twitter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamCard;
