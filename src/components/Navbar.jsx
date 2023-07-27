import React from "react";
import profilePic from "../assets/github.jpg";
import { BiSun, BiBell } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="px-2 lg:px-8 py-3 flex justify-between items-center shadow-2xl">
      <div>
        <h1 className="font-bold text-orange-500 text-2xl">LOGO</h1>
      </div>
      <ul className="flex items-center gap-2 lg:gap-6 text-gray-500  lg:text-[14px] text-[12px] cursor-pointer">
        <li className=" border-b-[2px] border-orange-500">Events</li>
        <li>Organization</li>
        <li>About</li>
      </ul>
      <div className="flex items-center gap-2 lg:gap-4 text-xl lg:text-2xl text-gray-500">
        <BiSun />
        <BiBell />
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden ">
          <img src={profilePic} alt="user-logo" className="w-full h-full " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
