import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDay } from "../redux/features/eventSlice";

const EventSchedule = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const { singleEvent } = useSelector((state) => state.events);
  const { eventDay } = singleEvent;

  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="font-semibold text-xl">Event Schedule</h1>
      <div className="flex gap-4 mt-4">
        <div
          onClick={() => {
            setSelectedDay(1);
            dispatch(setDay(1));
          }}
          className={`${
            selectedDay === 1 ? "border-orange-500 " : "border-orange-200 "
          }flex flex-col w-[210px] border-b-[2px]  font-semibold cursor-pointer`}
        >
          <p
            className={`${
              selectedDay === 1 ? "text-orange-500" : "text-gray-500"
            } text-lg`}
          >
            Day 01
          </p>
          <small
            className={`${
              selectedDay === 1 ? "text-orange-500" : "text-gray-400"
            }`}
          >
            {eventDay && eventDay[0]}
          </small>
        </div>

        <div
          onClick={() => {
            setSelectedDay(2);
            dispatch(setDay(2));
          }}
          className={`${
            selectedDay === 2 ? "border-orange-500 " : "border-orange-200 "
          }flex flex-col w-[210px] border-b-[2px]  font-semibold cursor-pointer`}
        >
          <p
            className={`${
              selectedDay === 2 ? "text-orange-500" : "text-gray-500"
            } text-lg`}
          >
            Day 02
          </p>
          <small
            className={`${
              selectedDay === 2 ? "text-orange-500" : "text-gray-400"
            }`}
          >
            {eventDay && eventDay[1]}
          </small>
        </div>

        <div
          onClick={() => {
            setSelectedDay(3);
            dispatch(setDay(3));
          }}
          className={`${
            selectedDay === 3 ? "border-orange-500 " : "border-orange-200 "
          }flex flex-col w-[210px] border-b-[2px]  font-semibold cursor-pointer`}
        >
          <p
            className={`${
              selectedDay === 3 ? "text-orange-500" : "text-gray-500"
            } text-lg`}
          >
            Day 03
          </p>
          <small
            className={`${
              selectedDay === 3 ? "text-orange-500" : "text-gray-400"
            }`}
          >
            {eventDay && eventDay[2]}
          </small>
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
