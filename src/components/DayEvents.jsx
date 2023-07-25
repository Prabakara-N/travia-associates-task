import React from "react";

const DayEvents = () => {
  return (
    <div>
      <table className="mt-6">
        <thead className="bg-orange-200 w-full">
          <tr className="flex items-center justify-between w-full">
            <th scope="col" className="px-10">
              Time
            </th>
            <th scope="col" className="px-14">
              Content
            </th>
            <th scope="col" className="px-6">
              Speakers
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <td>hi</td>
            <td>hi</td>
            <td className="flex items-center gap-4">
              <div>hi</div>
              <div>
                <p>1</p>
                <small>1</small>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DayEvents;
