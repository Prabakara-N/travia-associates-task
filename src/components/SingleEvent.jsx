import React from "react";
import EventInfo from "./EventInfo";
import Description from "./Description";
import University from "./University";
import EventSchedule from "./EventSchedule";
import DayEvents from "./DayEvents";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";
import { setEventDetails } from "../redux/features/eventSlice";

const SingleEvent = () => {
  const { eventDetails } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        eventDetails ? "block lg:block" : "hidden lg:block"
      } w-full lg:w-[710px] rounded-lg p-6 border-[1px] border-gray-300 `}
    >
      {/* Back Button */}
      <div
        onClick={() => dispatch(setEventDetails(false))}
        className="flex items-center gap-2 mb-3 lg:hidden font-medium text-gray-600 font-sm"
      >
        <BsArrowLeft className="text-2xl" />
        <p>Dashboard</p>
      </div>
      <EventInfo />
      <Description />
      <University />
      <EventSchedule />
      <DayEvents />
    </div>
  );
};

export default SingleEvent;
