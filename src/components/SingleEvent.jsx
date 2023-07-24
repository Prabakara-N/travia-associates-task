import React from "react";
import EventInfo from "./EventInfo";
import Description from "./Description";
import University from "./University";
import EventSchedule from "./EventSchedule";

const SingleEvent = () => {
  return (
    <div className="w-[710px] rounded-lg p-6 border-[1px] border-gray-300 ">
      <EventInfo />
      <Description />
      <University />
      <EventSchedule />
    </div>
  );
};

export default SingleEvent;
