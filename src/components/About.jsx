import React from "react";
import { GoDotFill } from "react-icons/go";
import {PiArrowUpRightBold} from "react-icons/pi"

const About = () => {
  const education = [
    {
      name: "MMSIT",
      course: "Frontend Web Development",
      startDate: "2022",
      endDate: "2023",
    },
    {
      name: "Stanford University",
      course: "MSc(Human Computer Interaction)",
      startDate: "2013",
      endDate: "2015",
    },
    {
      name: "MIT Summer School",
      course: "UX Training Bootcamp",
      startDate: "2013",
      endDate: "2014",
    },
  ];

  const workExperience = [
    {
      img: "https://assets.website-files.com/5fef5619b640934b33c2385e/6087cab3a74dfa369ea2e92a_Group%2084.svg",
      name: "SpaceFleet",
      position: "Junior Product Designer",
      startDate: "April2019",
      endDate: "Current",
    },
    {
      img: "https://assets.website-files.com/5fef5619b640934b33c2385e/6087cab3f70370b7efe8c560_Group%2085.svg",
      name: "MusicMash",
      position: "Information Architect",
      startDate: "April2016",
      endDate: "May2017",
    },
    {
      img: "https://assets.website-files.com/5fef5619b640934b33c2385e/6087cab33450e64d2fa55138_Group%2086.svg",
      name: "Kingdom",
      position: "UI Designer",
      startDate: "April2016",
      endDate: "May2017",
    },
  ];
  return (
    <div className="max-w-[1215px] px-5 mx-auto">
      <div className="flex flex-wrap justify-between mb-[90px]">
        <div className="w-full mb-5 md:m-0 md:w-[45%]">
          <h3 className="uppercase text-transparent bg-clip-text leading-[100%] bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 text-base font-[600] tracking-wider my-2">frontend developer</h3>
          <h1 className="text-[54px] text-black font-[700]">That's me!</h1>
        </div>
        <div className="w-full md:w-[55%]">
          <p className="text-base text-gray-500 font-[500] leading-9">
          Experienced frontend web developer adept at crafting visually captivating user interfaces and delivering seamless online experiences with a deep understanding of modern web technologies.
          </p>
        </div>
      </div>

      {/* gallery */}
      <div className="flex gap-5 flex-wrap justify-between mb-[90px]">
        <div className="w-full md:w-[300px]">
          <img className="h-[300px] md:h-[500px] w-full object-cover object-right-bottom" src="src\assets\about\contact2.jpg" />
        </div>
        <div className="w-full md:w-[500px]">
          <img className="h-[300px] md:h-[500px] w-full object-cover" src="src\assets\about\contact.jpg" />
        </div>
        <div className="w-full flex justify-between md:flex md:flex-col md:w-[300px]">
          <img  className="h-[150px] md:h-[250px] w-[48%] md:w-full object-cover" src="src\assets\about\hotale2.jpg" />
          <img  className="h-[150px] md:h-[250px] w-[48%] md:w-full object-cover" src="src\assets\about\hotale.jpg" />
        </div>
      </div>

      <div className="flex flex-wrap w-full justify-between">
        {/* education */}
        <div className=" w-full md:w-[45%] mb-[90px] md:m-0">
          <div>
            <h3 className="text-[36px] font-[700] mb-8">📚 Education</h3>
          </div>
          <div>
            {education?.map((el) => {
              return (
                <div className="group">
                   <div className="flex items-start justify-between py-[40px] h-[150px] border-b-gray-200 border-b-2">
                  <div className="flex flex-wrap gap-3 w-full items-end justify-between me-5">
                    <div>
                      <h3 className="text-base font-[500] mb-1">{el?.name}</h3>
                      <p className="text-gray-500 font-[500]">{el?.course}</p>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 font-[500]">
                      <GoDotFill />
                      <span>{el?.startDate}</span>-<span>{el.endDate}</span>
                    </div>
                  </div>
                  <div className=" group-hover:translate-x-2 group-hover:-translate-y-2 transition-all delay-75 ease-in-out duration-300">
                    <PiArrowUpRightBold />
                  </div>
                </div>
                <hr className="border-black w-0 group-hover:w-full transition-all duration-1000"/>
                </div>
               
              );
            })}
          </div>
        </div>

        {/* work experiences */}
        <div  className="w-full md:w-[45%]">
          <div>
            <h3 className="text-[36px] font-[700] mb-8">💼 Work Experience</h3>
          </div>
          {workExperience.map((el) => {
            return (
              <div className="group">
                <div className=" flex items-start justify-between py-[40px] h-[150px]  border-b-gray-200 border-b-2">
                  <div className="flex flex-wrap gap-3 w-full items-end justify-between me-5">
                    <div className="flex">
                      <img className="w-[50px] me-5" src={el?.img} />
                      <div>
                         <h3 className="text-base font-[500] mb-1">{el?.name}</h3>
                      <p className="text-gray-500 font-[500]">{el?.position}</p>
                      </div>
                     
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 font-[500]">
                      <GoDotFill />
                      <span>{el?.startDate}</span>-<span>{el.endDate}</span>
                    </div>
                  </div>
                  <div className=" group-hover:translate-x-2 group-hover:-translate-y-2 transition-all delay-75 ease-in-out duration-300">
                    <PiArrowUpRightBold/>
                  </div>
                </div>
                <hr className="border-black w-0 group-hover:w-full transition-all duration-1000"/>
              </div>
              
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
