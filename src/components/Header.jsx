import React, { useEffect, useState } from "react";
import "./Header.css";
import ScrollTop from "./ScrollTop";
import { Link } from 'react-scroll'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    setLastScroll(window.scrollY);
  }, []);

  const handleShowNav = () => {
    let scrollTop = window.scrollY;
    if (lastScroll < scrollTop) {
      console.log("scroll down");
      setShowNav(false);
    } else {
      console.log("scroll up");
      setShowNav(true);
    }

    setLastScroll(scrollTop);
  };

  window.addEventListener("scroll", handleShowNav);
  // console.log("last scroll",lastScroll, "current scroll", window.scrollY);

  return (
    <>
      <nav
        className={`${
          showNav ? " translate-y-0" : "-translate-y-[100%]"
        } z-50  sticky top-0  transition-all duration-300 bg-white`}
      >
        <div
          className={` max-w-[1215px] z-50 max-lg:px-5 lg:mx-auto sticky top-0 flex items-center justify-between py-5 bg-white`}
        >
          <div>
            <img
              src="https://assets.website-files.com/5fef5619b640934b33c2385e/6078ab3cfa1bca879adb93d1_Group%2070.svg"
              alt=""
            />
          </div>
          <div className=" max-lg:hidden">
            <ul className="nav-link flex items-center gap-10">
              <li>
                <Link to='home' activeClass='active' spy={true} className=" cursor-pointer text-sm font-[500] hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to='about' activeClass='active' spy={true} className=" cursor-pointer text-sm font-[500] hover:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link to='services' activeClass='active' spy={true} className=" cursor-pointer text-sm font-[500] hover:text-gray-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to='projects' activeClass='active' spy={true} className=" cursor-pointer text-sm font-[500] hover:text-gray-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link to='contact' activeClass='active' spy={true}
                  className=" cursor-pointer text-sm font-[500] flex items-center group"
                >
                  Book a call{" "}
                  <img
                    className=" transition-all duration-200 transform translate-x-2 group-hover:translate-x-4"
                    src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff019fc559a4200eda62273_Vector.svg"
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* mobile menu  */}
          <div className="lg:hidden">
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className={`${menuOpen && "open"} menu-icon`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div
          className={`${
            menuOpen
              ? "translate-y-0 top-[70px]  shadow-2xl"
              : "-translate-y-full top-0"
          } bg-white h-fit w-full absolute py-8 px-5 left-0 transition-all duration-500`}
        >
          <ul className="nav-link flex flex-col gap-10 ">
            <li>
              <Link to='home' activeClass='active' spy={true}
                onClick={() => setMenuOpen(!menuOpen)}
                className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to='about' activeClass='active' spy={true}
                onClick={() => setMenuOpen(!menuOpen)}
                className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link to='services' activeClass='active' spy={true}
                onClick={() => setMenuOpen(!menuOpen)}
                className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
              >
                Services
              </Link>
            </li>
            <li>
              <Link to='projects' activeClass='active' spy={true}
                onClick={() => setMenuOpen(!menuOpen)}
                className=" cursor-pointer text-sm font-[500] hover:text-gray-400"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link to='contact' activeClass='active' spy={true}
                onClick={() => setMenuOpen(!menuOpen)}
                className=" cursor-pointer text-sm font-[500] flex items-center group"
              >
                Book a call{" "}
                <img
                  className=" transition-all duration-200 transform translate-x-2 group-hover:translate-x-4"
                  src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff019fc559a4200eda62273_Vector.svg"
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ScrollTop />
    </>
  );
};

export default Header;
