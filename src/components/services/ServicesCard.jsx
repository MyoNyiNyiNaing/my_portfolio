import React from "react";

const ServicesCard = ({ img, title, para, desc1, desc2, desc3 }) => {
  return (
    <div>
      <div>
        <img className=" object-contain w-[70px]" src={img} alt="" />
      </div>
      <div className=" mt-[42px] mb-[20px]">
        <h5 className=" text-lg leading-[110%] font-bold">{title}</h5>
      </div>
      <div className=" max-w-[85%] mb-[25px]">
        <p className=" text-sm text-[#666]">{para}</p>
      </div>
      <div>
        <div className=" mb-[10px]">
          <div className="flex justify-start items-center">
            <div className=" flex w-[7px] h-[7px] justify-center items-center rounded-full bg-[#000]"></div>
            <div className=" ml-[10px]">
              <div className=" text-[#000] text-sm font-bold">{desc1}</div>
            </div>
          </div>
        </div>
        <div className=" mb-[10px]">
          <div className="flex justify-start items-center">
            <div className=" flex w-[7px] h-[7px] justify-center items-center rounded-full bg-[#000]"></div>
            <div className=" ml-[10px]">
              <div className=" text-[#000] text-sm font-bold">{desc2}</div>
            </div>
          </div>
        </div>
        <div className=" mb-[10px]">
          <div className="flex justify-start items-center">
            <div className=" flex w-[7px] h-[7px] justify-center items-center rounded-full bg-[#000]"></div>
            <div className=" ml-[10px]">
              <div className=" text-[#000] text-sm font-bold">{desc3}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
