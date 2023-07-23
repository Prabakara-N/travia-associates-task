import React from "react";
import { useSelector } from "react-redux";

const AllEvents = () => {
  const { events } = useSelector((state) => state.events);

  if (events.length < 1) {
    return (
      <h1 className="text-xl text-gray-600 font-semibold">
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
            className="p-4 rounded-lg bg-white border-[1px] border-gray-300 flex flex-col gap-4"
          >
            <h1 className="font-bold text-xl">{title}</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <small>{location}</small>
              </div>
              <div className="flex items-center gap-2">
                <small>{date}</small>
              </div>
              <div className="flex items-center gap-2">
                <small>{time}</small>
              </div>
            </div>
            <small>{cardDiscription}</small>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-[35px] h-[35px] rounded-full overflow-hidden">
                  <img
                    src={authorProfile}
                    alt="authorprofile"
                    className="w-full h-full "
                  />
                </div>
                <div>
                  <p>{author}</p>
                  <small>Publication</small>
                </div>
              </div>
              <div className="flex items-center gap-2">
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
