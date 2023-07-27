import React from "react";
import { useSelector } from "react-redux";

const University = () => {
  const { singleEvent } = useSelector((state) => state.events);
  const { univerSity, departMent, universityLogo } = singleEvent;
  return (
    <div className="my-8 px-2 md:px-5 flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <div className="w-[65px] h-[65px] md:w-[80px] md:h-[80px] rounded-full overflow-hidden">
          <img src={universityLogo} alt="universityLogo" />
        </div>
        <div className="font-medium">
          <p className="text-sm md:text-base">{univerSity}</p>
          <p className="text-gray-500 text-[0.8rem] md:text-[0.95rem]">
            {departMent}
          </p>
        </div>
      </div>
      <button className="bg-orange-600 px-5 md:px-12 py-[0.4rem] text-sm md:text-base rounded-md font-medium text-white">
        Follow
      </button>
    </div>
  );
};

export default University;
