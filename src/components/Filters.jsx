import React, { useState } from "react";
import { FaStream } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { LuCalendarDays } from "react-icons/lu";
import { BiDollar } from "react-icons/bi";
import { MdOutlineOnlinePrediction } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/features/eventSlice";

const Filters = () => {
  const [searchEvent, setSearchEvent] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center gap-4 lg:flex-row items-center lg:justify-between ">
      <div className="flex gap-2 lg:gap-0 items-center w-full md:w-[430px] md:mx-auto lg:ml-3 md:justify-betwee">
        <div className="py-[0.7rem] px-3 text-gray-500 rounded-md bg-white border-[1px] border-gray-300">
          <FaStream />
        </div>
        <div className="relative w-full mx-auto md:w-[380px]">
          <RiSearchLine className="absolute top-3 left-2 text-gray-500" />
          <input
            type="text"
            className="pl-8 py-2 border-[1px] w-full border-gray-300 rounded-md"
            value={searchEvent}
            onChange={(e) => {
              setSearchEvent(e.target.value);
              dispatch(setSearchQuery(e.target.value));
            }}
            placeholder="Search events..."
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row items-center lg:justify-between w-full lg:w-[710px]">
        <ul className="bg-gray-200 border-gray-300 border-[1px] cursor-pointer py-[0.32rem] px-2 rounded-md flex items-center gap-4 text-[13px]">
          <li className="font-medium bg-white rounded-md py-1 px-2">Popular</li>
          <li>Recent</li>
          <li>Event Deadline</li>
        </ul>

        <div className="flex justify-center w-full overflow-x-scroll md:overflow-auto items-center gap-1 md:gap-2 rounded-md ">
          <div className="relative inline-block">
            <div className="absolute inset-y-0 left-2 flex items-center px-2 pointer-events-none">
              <LuCalendarDays className="h-4 w-4 mr-2 md:mr-3" />
            </div>
            <select className="py-2 px-2 pl-8 pr-4 rounded-md text-[14px] border-gray-300 border-[1px] cursor-pointer font-medium bg-gray-50">
              <option>Jan 6 - Jan 13</option>
            </select>
          </div>

          <div className="relative inline-block">
            <div className="absolute inset-y-0 left-2 flex items-center px-2 pointer-events-none">
              <BiDollar className="h-4 w-4 mr-3" />
            </div>
            <select className="py-2 px-2 pl-8 pr-4 rounded-md text-[14px] border-gray-300 border-[1px] cursor-pointer bg-gray-50 font-medium">
              <option>Fee</option>
            </select>
          </div>

          <div className="relative inline-block">
            <div className="absolute inset-y-0 left-2 flex items-center px-2 pointer-events-none">
              <MdOutlineOnlinePrediction className="h-4 w-4 mr-3" />
            </div>
            <select className="py-2 px-2 pl-8 pr-4 rounded-md text-[14px] border-gray-300 border-[1px] cursor-pointer bg-gray-50 font-medium">
              <option>Event Mode</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
