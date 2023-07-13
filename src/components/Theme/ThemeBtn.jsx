import React, { useEffect, useState } from "react";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import "./Btn.css";
const ThemeBtn = () => {
  const [darkMode, setDarkMode] = useState(false);
  const iconToggle = () => {
    return setDarkMode((darkMode) => !darkMode);
  };
  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");

      iconToggle();
      return;
    }
    document.documentElement.classList.add("dark");

    iconToggle();
  };

  return (
    <div className=" fixed top-[50%] -right-9 translate-y-[-50%] transition-all duration-300 intro hover:right-0">
      <button
        onClick={() => themeSwitch()}
        className={`p-3 rounded-bl-md rounded-tl-md  outline outline-offset-0 text-lg transition-all duration-500  ${
          darkMode
            ? "bg-white outline-black text-black"
            : "outline-white bg-black text-white"
        }`}
      >
        {darkMode ? (
          <BsMoonStarsFill className="hover:animate-pulse" />
        ) : (
          <BsSunFill className=" hover:animate-[spin_2s_infinite]" />
        )}
      </button>
    </div>
  );
};

export default ThemeBtn;
// BsMoonStarsFill
