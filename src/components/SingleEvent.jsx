import React from "react";
import EventInfo from "./EventInfo";
import Description from "./Description";

const SingleEvent = () => {
  return (
    <div className="w-[710px] rounded-lg p-6 border-[1px] border-gray-300 ">
      <EventInfo />
      <Description />
    </div>
  );
};

export default SingleEvent;
