import React from "react";
import { AllEvents, Filters, SingleEvent } from "../components";
// import Filters from "../components/Filters";
// import AllEvents from "../components/AllEvents";

const Dashboard = () => {
  return (
    <div className="px-24 py-6 bg-gray-100 min-h-screen">
      <Filters />
      <div className="flex items-center justify-between mt-5">
        <AllEvents />
        <SingleEvent />
      </div>
    </div>
  );
};

export default Dashboard;
