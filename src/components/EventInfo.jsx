import React from "react";
import { useSelector } from "react-redux";
import { FiBookmark } from "react-icons/fi";
import { BsShareFill } from "react-icons/bs";
import { SlOptionsVertical } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { MdOutlineOnlinePrediction } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { BiCalendar, BiDollar } from "react-icons/bi";
import { HiMiniLanguage } from "react-icons/hi2";

const EventInfo = () => {
  const { singleEvent } = useSelector((state) => state.events);
  const {
    title,
    image,
    genres,
    dateAndTime,
    address,
    language,
    fees,
    speaker,
    eventMode,
  } = singleEvent;
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <h1 className="font-bold text-2xl">{title}</h1>
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-md p-2">
            <FiBookmark />
          </div>
          <div className="bg-white rounded-md p-2">
            <BsShareFill />
          </div>
          <div className="bg-white rounded-md p-2">
            <SlOptionsVertical />
          </div>
        </div>
      </div>

      {/* main-img */}
      <div className="mt-6 rounded-lg overflow-hidden w-full h-[360px]">
        <img src={image} alt="eventimage" className="w-full h-full" />
      </div>

      {/* generes */}
      <div className="flex items-center gap-4 mt-6">
        {genres &&
          genres.map((genre, index) => (
            <small
              key={index}
              className="bg-gray-200 text-gray-700 font-medium flex items-center gap-2 px-2 py-1 rounded-xl"
            >
              <GoDotFill /> {genre}
            </small>
          ))}
      </div>

      {/* eventInfo */}
      <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:items-center justify-center md:justify-between w-full mt-6">
        <div className="flex items-center gap-5">
          <BiCalendar className="text-2xl text-gray-800" />
          <div>
            <p className="font-medium text-[0.95rem]">Date and time</p>
            <small className="text-gray-600">{dateAndTime}</small>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <FaHeadphones className="text-2xl text-gray-800" />
          <div>
            <p className="font-medium text-[0.95rem]">Speaker</p>
            <small className="text-gray-600">{speaker}</small>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <MdOutlineOnlinePrediction className="text-2xl text-gray-800" />
          <div>
            <p className="font-medium text-[0.95rem]">EventMode</p>
            <small className="text-gray-600">{eventMode}</small>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:items-center md:justify-between w-full mt-8">
        <div className="flex items-center gap-5">
          <GrMapLocation className="text-2xl text-gray-800" />
          <div className="w-[140px]">
            <p className="font-medium text-[0.95rem]">Location</p>
            <small className="text-gray-600 ">{address}</small>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <HiMiniLanguage className="text-2xl text-gray-800" />
          <div>
            <p className="font-medium flex-1 text-[0.95rem]">Language</p>
            <small className="text-gray-600">{language}</small>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <BiDollar className="text-2xl text-gray-800" />
          <div>
            <p className="font-medium text-[0.95rem]">Fee</p>
            <small className="text-gray-600">${fees}.00</small>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="bg-orange-600 px-4 py-2 rounded-md font-medium text-white">
          Register Event
        </button>
      </div>
    </>
  );
};

export default EventInfo;
