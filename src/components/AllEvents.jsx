import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdLocationOn, MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import {
  setDay,
  setEvent,
  setEventDetails,
  setSelectedDay,
} from "../redux/features/eventSlice";

const AllEvents = () => {
  const { events, eventDetails } = useSelector((state) => state.events);

  const dispatch = useDispatch();

  const handleChangeEvent = (id) => {
    dispatch(setEvent(id));
    dispatch(setDay(1));
    dispatch(setSelectedDay(1));
    dispatch(setEventDetails(true));
  };

  return (
    <div
      className={`${
        eventDetails ? "hidden lg:block" : "block lg:block"
      } md:w-[430px] lg:block mx-auto flex flex-col gap-4`}
    >
      {events.map((event) => {
        const {
          id,
          title,
          location,
          date,
          time,
          author,
          authorProfile,
          publishedAt,
          cardDiscription,
        } = event;
        return (
          <div
            key={id}
            className="p-4 rounded-lg bg-white border-[1px] border-gray-300 flex flex-col gap-2 lg:mb-4 cursor-pointer"
            onClick={() => handleChangeEvent(id)}
          >
            <h1 className="font-bold text-xl">{title}</h1>
            <div className="flex items-center justify-between text-gray-500 font-medium">
              <div className="flex items-center gap-1">
                <MdLocationOn />
                <small>{location}</small>
              </div>
              <div className="flex items-center gap-1">
                <AiOutlineCalendar />
                <small>{date}</small>
              </div>
              <div className="flex items-center gap-1">
                <MdOutlineWatchLater />
                <small>{time}</small>
              </div>
            </div>
            <small>{cardDiscription || ""}</small>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                  <img
                    src={authorProfile}
                    alt="authorprofile"
                    className="w-full h-full "
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm">{author}</p>
                  <small className="text-green-500 font-medium">
                    Publication
                  </small>
                </div>
              </div>
              <div className="flex items-center gap-1 text-gray-500 text-[0.9rem]">
                <MdOutlineWatchLater />
                <small>{publishedAt}</small>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllEvents;
