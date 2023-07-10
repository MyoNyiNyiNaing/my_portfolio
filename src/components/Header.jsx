import React,{useEffect, useState} from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const  [lastScroll, setLastScroll] = useState(0)
  const [showNav, setShowNav] = useState(true)

  useEffect(()=> {
    setLastScroll(window.scrollY)
    
  }, [])


  const handleShowNav = () => {
    let scrollTop = window.scrollY;
    if(lastScroll < scrollTop){
      console.log("scroll down");
      setShowNav(false)
    }else {
      console.log("scroll up");
      setShowNav(true)
    }
    
    setLastScroll(scrollTop)
    

  }

  window.addEventListener("scroll", handleShowNav);
  // console.log("last scroll",lastScroll, "current scroll", window.scrollY);

 

  
  return (
    <>
    <nav className={`${showNav ? " translate-y-0" : "-translate-y-[100%]"} sticky top-0  transition-all duration-300 max-w-[1215px] px-5 lg:mx-auto `}>
      <div className={` sticky top-0 z-50 flex items-center justify-between py-5 bg-white`}>
      <div>
        <img
          src="https://assets.website-files.com/5fef5619b640934b33c2385e/6078ab3cfa1bca879adb93d1_Group%2070.svg"
          alt=""
        />
      </div>
      <div className=" max-lg:hidden">
        <ul className="flex items-center gap-10">
          <li>
            <a href="#" className=" text-sm font-[500] hover:text-gray-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className=" text-sm font-[500] hover:text-gray-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className=" text-sm font-[500] hover:text-gray-500">
              Services
            </a>
          </li>
          <li>
            <a href="#" className=" text-sm font-[500] hover:text-gray-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className=" text-sm font-[500] flex items-center group">
              Book a call{" "}
              <img
                className=" transition-all duration-200 transform translate-x-2 group-hover:translate-x-4"
                src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff019fc559a4200eda62273_Vector.svg"
              />
            </a>
          </li>
        </ul>
      </div>

      {/* mobile menu  */}
      <div  className="lg:hidden">
        <div onClick={()=> setMenuOpen(!menuOpen)} className={`${menuOpen && "open"} menu-icon`}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        
      </div>
      </div>


      <div className={`${menuOpen ? "translate-y-0 top-[70px]  shadow-2xl": "-translate-y-full top-0"} bg-white h-fit w-full absolute py-8 px-5 left-0 transition-all duration-500` }>
        <ul className="flex flex-col gap-10 ">
          <li>
            <a href="#" onClick={()=> setMenuOpen(!menuOpen)} className=" text-sm font-[500] hover:text-gray-500">
              Home
            </a>
          </li>
          <li>
            <a href="#"  onClick={()=> setMenuOpen(!menuOpen)} className=" text-sm font-[500] hover:text-gray-500">
              About
            </a>
          </li>
          <li>
            <a href="#"  onClick={()=> setMenuOpen(!menuOpen)} className=" text-sm font-[500] hover:text-gray-500">
              Services
            </a>
          </li>
          <li>
            <a href="#"  onClick={()=> setMenuOpen(!menuOpen)} className=" text-sm font-[500] hover:text-gray-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#"  onClick={()=> setMenuOpen(!menuOpen)} className=" text-sm font-[500] flex items-center group">
              Book a call{" "}
              <img
                className=" transition-all duration-200 transform translate-x-2 group-hover:translate-x-4"
                src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff019fc559a4200eda62273_Vector.svg"
              />
            </a>
          </li>
        </ul>
        </div>

      
    </nav>

    <div className=" min-h-[500vh]"></div>
    </>
  );
};

export default Header;
