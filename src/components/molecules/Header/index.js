import React from "react";
import { LogoRocket } from "../../../assets";
import "./Header.css";

const Header = () => {
  return (
    <div className="  bg-gray-800 text-gray-200  px-6 py-4 w-full ">
      <div className="max-w-screen-lg flex justify-between items-center m-auto">
        <div className="text-xl uppercase text-white ">
          <a href="/#" className="flex items-center space-x-4">
            <img className="w-16 h-16 " src={LogoRocket} alt="logo" />
            <p>Finma Blog</p>
          </a>
        </div>
        <div>
          <ul className="sm:flex space-x-10 uppercase hidden transition-all duration-200">
            <li className="hover:text-white">
              <a href="/#"> Home</a>
            </li>
            <li className="hover:text-white">
              <a href="/#"> About</a>
            </li>
            <li className="hover:text-white">
              <a href="/login"> Logout</a>
            </li>
          </ul>
          <div className="block sm:hidden cursor-pointer">
            <span className="block w-8 h-1 bg-white mx-auto my-1 rounded-sm"></span>
            <span className="block w-8 h-1 bg-white mx-auto my-1 rounded-sm"></span>
            <span className="block w-8 h-1 bg-white mx-auto my-1 rounded-sm"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
