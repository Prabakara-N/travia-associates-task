import React from "react";
import { AllEvents, Filters, SingleEvent } from "../components";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { events } = useSelector((state) => state.events);

  return (
    <div className="px-2 md:px-20 lg:px-24 py-6 bg-gray-100 min-h-screen">
      <Filters />
      {events.length < 1 ? (
        <h1 className="text-center text-gray-600 text-xl md:text-2xl mt-8 font-semibold">
          No Events Found !!!
        </h1>
      ) : (
        <div className="flex justify-between mt-5">
          <AllEvents />
          <SingleEvent />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
