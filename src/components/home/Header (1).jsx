import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import usericon from "../assets/images/header/user.png";
import hearticon from "../assets/images/header/heart.png";
import shoppingcarticon from "../assets/images/header/shopping-cart.png";
import searchicon from "../assets/images/header/search.png";
import compareicon from "../assets/images/header/compare.png";
import { Link } from "react-router-dom";

export const Header = () => {
  const [sidenav, setsidenav] = useState(false);

  return (
    <div className="flex">
      <div
        className={`h-screen w-11/12 bg-[#ffffff] transition-all duration-1000 z-20 overflow-hidden absolute ${sidenav == true ? `-left-0` : `-left-full`
          }`}
      >
        <div className="md:px-8 w-full py-5">
          <div className="px-4 flex justify-between items-center border-b border-[#e1e1e1] py-3">
            <Link to={'/'}>
              <img
                src={logo}
                alt="Wise Market Logo"
                className=" cursor-pointer"
              />
            </Link>
            <i
              className="fa fa-multiply text-2xl cursor-pointer"
              onClick={() => (sidenav != false ? setsidenav(false) : null)}
            ></i>
          </div>
          <div className="h-[340px] overflow-scroll px-5 py-2 my-4">
            <ul>
              <li className="border-b my-3">
                <div className="flex justify-between items-center pb-2 cursor-pointer">
                  <a
                    href="#"
                    className="font-semibold hover:text-[#1BAB6E] transition-all duration-250"
                  >
                    Mobile
                  </a>
                  <i className="fa fa-angle-down"></i>
                </div>
              </li>
              <li className="border-b my-3">
                <div className="flex justify-between items-center pb-2 cursor-pointer">
                  <a
                    href="#"
                    className="font-semibold hover:text-[#1BAB6E] transition-all duration-250"
                  >
                    Laptop
                  </a>
                  <i className="fa fa-angle-down"></i>
                </div>
              </li>
              <li className="border-b my-3">
                <div className="flex justify-between items-center pb-2 cursor-pointer">
                  <a
                    href="#"
                    className="font-semibold hover:text-[#1BAB6E] transition-all duration-250"
                  >
                    Tablests
                  </a>
                  <i className="fa fa-angle-down"></i>
                </div>
              </li>
              <li className="border-b my-3">
                <div className="flex justify-between items-center pb-2 cursor-pointer">
                  <a
                    href="#"
                    className="font-semibold hover:text-[#1BAB6E] transition-all duration-250"
                  >
                    Smart Watches
                  </a>
                  <i className="fa fa-angle-down"></i>
                </div>
              </li>
              <li className="border-b my-3">
                <div className="flex justify-between items-center pb-2 cursor-pointer">
                  <a
                    href="#"
                    className="font-semibold hover:text-[#1BAB6E] transition-all duration-250"
                  >
                    Accessories
                  </a>
                  <i className="fa fa-angle-down"></i>
                </div>
              </li>
              <li className="border-b my-3">
                <div className="flex justify-between items-center pb-2 cursor-pointer">
                  <a
                    href="#"
                    className="font-semibold hover:text-[#1BAB6E] transition-all duration-250"
                  >
                    Wireless Earbuds
                  </a>
                  <i className="fa fa-angle-down"></i>
                </div>
              </li>
              <li className="border-b my-3">
                <div className="flex justify-between items-center pb-2 cursor-pointer">
                  <a
                    href="#"
                    className="font-semibold hover:text-[#1BAB6E] transition-all duration-250"
                  >
                    Home and lifestyles
                  </a>
                  <i className="fa fa-angle-down"></i>
                </div>
              </li>
              <li className="border-b my-3">
                <div className="flex justify-between items-center pb-2 cursor-pointer">
                  <a
                    href="#"
                    className="font-semibold hover:text-[#1BAB6E] transition-all duration-250"
                  >
                    Gaming
                  </a>
                  <i className="fa fa-angle-down"></i>
                </div>
              </li>
              <li className="border-b my-3">
                <div className="flex justify-between items-center pb-2 cursor-pointer">
                  <a
                    href="#"
                    className="font-semibold hover:text-[#1BAB6E] transition-all duration-250"
                  >
                    Kids
                  </a>
                  <i className="fa fa-angle-down"></i>
                </div>
              </li>
              <li className="border-b my-3">
                <div className="flex justify-between items-center pb-2 cursor-pointer">
                  <a
                    href="#"
                    className="font-semibold hover:text-[#1BAB6E] transition-all duration-250"
                  >
                    Health & Beauty
                  </a>
                  <i className="fa fa-angle-down"></i>
                </div>
              </li>
              <li className="border-b my-3">
                <div className="flex justify-between items-center pb-2 cursor-pointer">
                  <a
                    href="#"
                    className="font-semibold hover:text-[#1BAB6E] transition-all duration-250"
                  >
                    Fashion
                  </a>
                  <i className="fa fa-angle-down"></i>
                </div>
              </li>
              <li className="border-b my-3">
                <div className="flex justify-between items-center pb-2 cursor-pointer">
                  <a
                    href="#"
                    className="font-semibold hover:text-[#1BAB6E] transition-all duration-250"
                  >
                    Wishlist
                  </a>
                  <i className="fa fa-angle-down"></i>
                </div>
              </li>
              <li className="border-b my-3">
                <div className="flex justify-between items-center pb-2 cursor-pointer">
                  <a
                    href="#"
                    className="font-semibold hover:text-[#1BAB6E] transition-all duration-250"
                  >
                    Compare
                  </a>
                  <i className="fa fa-angle-down"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>











      
      <div className="px-5 md:px-8 w-full border-b border-[#e1e1e1]">
        <div className="mx-auto h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <i
              className="fa fa-bars text-xl lg:hidden cursor-pointer"
              onClick={() => (sidenav == false ? setsidenav(true) : null)}
            ></i>
            <Link to={'/'}>
              <img src={logo} alt="Wise Market Logo" className="cursor-pointer" />
            </Link>
          </div>
          <div className="hidden lg:block">
            <label htmlFor="search" className="relative flex items-center">
              <input
                type="text"
                id="search"
                placeholder="Search By Brand,Model,Color..."
                className="px-6 p-3 font-normal text-[15px] placeholder:text-[15px] text-black border rounded  hover:border-[#1BAB6E] bg-[#F2F2F2]  placeholder-[#999]  border-gray-300 outline-none focus:border focus:border-[#1BAB6E] h-[40px] lg:text-base w-72"
              />
              <i className="fa fa-magnifying-glass text-xl text-[#999] absolute right-2 cursor-pointer bg-[#f2f2f2] pl-2"></i>
            </label>
          </div>
          <div className="flex items-center">
            <div className="hidden lg:flex items-start gap-3">
              <img
                src={usericon}
                alt="User icon"
                className="w-6 cursor-pointer"
              />
              <span className="cursor-pointer text-sm">Login/Register</span>
            </div>
            <div className="hidden lg:flex items-start text-2xl text-[#999] px-2">
              |
            </div>
            <div className="hidden lg:flex items-start">
              <img
                src={compareicon}
                alt="User icon"
                className="w-5 cursor-pointer"
              />
            </div>
            <div className="hidden lg:flex items-start text-2xl text-[#999] px-2">
              |
            </div>
            <div className="hidden lg:flex items-start relative">
              <img
                src={hearticon}
                alt="User icon"
                className="w-5 cursor-pointer"
              />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white h-4 rounded-full p-1 flex items-center text-sm">
                0
              </span>
            </div>
            <div className="hidden lg:flex items-start text-2xl text-[#999] px-2">
              |
            </div>
            <div className="lg:hidden mr-1">
              <img src={searchicon} alt="searchicon" />
            </div>
            <div className="relative">
              <img
                src={shoppingcarticon}
                alt="User icon"
                className="w-6 lg:w-5 cursor-pointer"
              />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white h-4 rounded-full p-1 flex items-center text-sm">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
