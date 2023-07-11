import React from "react";
import "./loading.css";
const Loading = () => {
  const words = ["P", "O", "R", "T", "F", "O", "L", "I", "O"];
  return (
    <div className=" flex justify-center items-center h-screen bg-white">
      <div className="h-20 px-5 overflow-hidden flex items-baseline page">
        {words.map((w) => {
          return <h1 className="text">{w}</h1>;
        })}
        <span className="w-3 h-3 bg-orange-500 text"></span>
      </div>
    </div>
  );
};

export default Loading;
