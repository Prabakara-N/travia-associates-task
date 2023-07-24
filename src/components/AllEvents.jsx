import React from "react";
import { useSelector } from "react-redux";
import { MdLocationOn, MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";

const AllEvents = () => {
  const { events } = useSelector((state) => state.events);

  if (events.length < 1) {
    return (
      <h1 className="text-xl w-[430px] text-center text-gray-600 font-semibold">
        No Events Found !!!
      </h1>
    );
  }
  return (
    <div className="w-[430px] flex flex-col gap-4">
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
            className="p-4 rounded-lg bg-white border-[1px] border-gray-300 flex flex-col gap-2 cursor-pointer"
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
