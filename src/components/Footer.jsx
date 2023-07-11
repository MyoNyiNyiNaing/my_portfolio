import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className=" bg-black text-white pt-16 md:pt-32 pb-5">
      <div className=" max-w-[1215px] max-lg:px-5 lg:mx-auto">
        <div className=" mb-10 md:mb-20 text-[30px] md:text-title_sm lg:text-title font-[700]">
          <h1 className=" mb-2">Ready to make something kickass?</h1>
          <a
            href="#"
            className=" relative footer-cta text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500"
          >
            Let's get on a call.
          </a>
        </div>
        {/* footer link */}
        <div className=" mb-20  md:mb-40 grid lg:grid-cols-2 gap-20">
          <div className=" text-sm text-[#575757] space-y-3">
            <a href="#">
              <img
                src="https://assets.website-files.com/5fef5619b640934b33c2385e/6078d43538e88cf2a8ff4464_White%20Logo.svg"
                alt=""
              />
            </a>
            <p>4353 Delaware Avenue, San Francisco, USA</p>
            <a href="#" className=" flex items-center gap-2 ">
              <img
                src="https://assets.website-files.com/5fef5619b640934b33c2385e/60792c7df85964dafaa3825d_Vector.svg"
                alt=""
              />
              <div className=" font-[700]">hi@thefolio.com</div>
            </a>
          </div>

          <div className=" grid grid-cols-2 md:grid-cols-3 gap-10 text-btn">
            <a href="#" className=" relative w-fit footer-link">
              About
            </a>
            <a href="#" className=" relative w-fit footer-link">
              Services
            </a>
            <a href="#" className=" relative w-fit footer-link">
              Experience
            </a>
            <a href="#" className=" relative w-fit footer-link">
              Contact
            </a>
            <a href="#" className=" relative w-fit footer-link">
              Blog
            </a>
            <a href="#" className=" relative w-fit footer-link">
              Projects
            </a>
            <a href="#" className=" relative w-fit footer-link">
              Dribble
            </a>
            <a href="#" className=" relative w-fit footer-link">
              Instagram
            </a>
            <a href="#" className=" relative w-fit footer-link">
              Twitter
            </a>
          </div>
        </div>

        {/* copy right */}
        <div>
          <div className=" text-sm text-[#8A93A2]">
            © All rights reserved.{" "}
            <a href="#" className=" font-[500] hover:text-white">
              {" "}
              Conversionflow
            </a>
            . Powered by{" "}
            <a href="#" className=" font-[500] hover:text-white">
              Webflow
            </a>{" "}
            /{" "}
            <a href="#" className=" font-[500] hover:text-white">
              Image License Info{" "}
            </a>
            /{" "}
            <a href="#" className=" font-[500] hover:text-white">
              {" "}
              Instructions
            </a>{" "}
            /{" "}
            <a href="#" className=" font-[500] hover:text-white">
              Changelog{" "}
            </a>
            /{" "}
            <a href="#" className=" font-[500] hover:text-white">
              {" "}
              Style Guide
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
