import { Link } from "react-router-dom";
import "./projects.css";
import { IoMdArrowForward } from "react-icons/io";

const Projects = () => {
  return (
    <div className="">
      <div className=" pt-[80px] max-w-[1215px] px-5  mx-auto flex items-center justify-between ">
        <div className="">
          <div>
            <h6 className=" text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 inline-block uppercase tracking-[4px]">
              Projects
            </h6>
          </div>
          <div className=" mt-[20px]">
            <h2 className=" text-[36px] sm:text-[40px] md:text-[50px] font-bold text-[#000]">
              I bring results
              <br />
              My clients are proof
            </h2>
          </div>
        </div>
        <div className=" font-medium relative">
          <div className="button_up transition-all duration-300">
            <div className=" text-[#fff] font-medium text-[18px] leading-[100%]">
              View all projects
            </div>
          </div>
          <div className="button_down"></div>
        </div>
      </div>
      <div className="grid grid-col-1 items-center justify-center md:grid-cols-3 gap-x-5 max-w-[1215px] px-5 mx-auto pt-[65px] pb-[80px] gap-10">
        <div className="group">
          <div className="relative">
            <div className=" inline-block border overflow-hidden relative">
              <img
                className="group-hover:scale-125 transition-all h-[325px] duration-300"
                src={
                  "https://assets.website-files.com/5ff05a7bd62f16808f485280/6077dc9bcd0f7a437038f60d_image_processing20200129-19798-1k8ponz%201-min-p-500.png"
                }
                alt=""
              />
              {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300"></div> */}
            </div>
          </div>
          <div className="p-[32px]">
            <div to={""}>
              <h6 className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 inline-block text-[14px] font-bold tracking-[4px] uppercase">
                Branding
              </h6>
              <div className=" mt-[15px] mb-[20px]">
                <h3 className="text-[24px] text-[#000000] font-bold transition duration-300 group-hover:text-[#00000099]">
                  Souful Rebrand
                </h3>
              </div>
            </div>
            <a href="https://hotale.vercel.app/" target="_blank" className="flex cursor-pointer hover-underline-animation_blog gap-3 text-[18px]  items-center font-normal transition duration-300 group-hover:text-[#00000099] text-[#000]">
              View Project
              <IoMdArrowForward />
            </a>
          </div>
        </div>
        <div className="group">
          <div className="relative">
            <div className=" inline-block border overflow-hidden relative">
              <img
                className="group-hover:scale-125 transition-all h-[325px] duration-300"
                src={
                  "https://assets.website-files.com/5ff05a7bd62f16808f485280/6077dc9bcd0f7a437038f60d_image_processing20200129-19798-1k8ponz%201-min-p-500.png"
                }
                alt=""
              />
              {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300"></div> */}
            </div>
          </div>
          <div className="p-[32px]">
            <div to={""}>
              <h6 className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 inline-block text-[14px] font-bold tracking-[4px] uppercase">
                Branding
              </h6>
              <div className=" mt-[15px] mb-[20px]">
                <h3 className="text-[24px] text-[#000000] font-bold transition duration-200 group-hover:text-[#00000099]">
                  Souful Rebrand
                </h3>
              </div>
            </div>
            <a href="https://hotale.vercel.app/" target="_blank" className="flex cursor-pointer hover-underline-animation_blog gap-3 text-[18px]  items-center font-normal transition duration-200 group-hover:text-[#00000099] text-[#000]">
              View Project
              <IoMdArrowForward />
            </a>
          </div>
        </div>
        <div className="group">
          <div className="relative">
            <div className=" inline-block border overflow-hidden relative">
              <img
                className="group-hover:scale-125 transition-all h-[325px] duration-300"
                src={
                  "https://assets.website-files.com/5ff05a7bd62f16808f485280/6077dc9bcd0f7a437038f60d_image_processing20200129-19798-1k8ponz%201-min-p-500.png"
                }
                alt=""
              />
              {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300"></div> */}
            </div>
          </div>
          <div className="p-[32px]">
            <div to={""}>
              <h6 className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 inline-block text-[14px] font-bold tracking-[4px] uppercase">
                Branding
              </h6>
              <div className=" mt-[15px] mb-[20px]">
                <h3 className="text-[24px] text-[#000000] font-bold transition duration-200 group-hover:text-[#00000099]">
                  Souful Rebrand
                </h3>
              </div>
            </div>
            <a href="https://hotale.vercel.app/" target="_blank" className="flex cursor-pointer hover-underline-animation_blog gap-3 text-[18px]  items-center font-normal transition duration-200 group-hover:text-[#00000099] text-[#000]">
              View Project
              <IoMdArrowForward />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
