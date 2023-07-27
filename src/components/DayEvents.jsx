import React from "react";
import { useSelector } from "react-redux";

const DayEvents = () => {
  const { day } = useSelector((state) => state.events);

  return (
    <div className="overflow-x-scroll md:overflow-auto">
      <table className="mt-6">
        <thead className="bg-orange-100 divide-y w-full rounded-tr-lg rounded-tl-lg">
          <tr className="flex items-center justify-between w-full">
            <th scope="row" className="px-6 py-4">
              Time
            </th>
            <th scope="row" className="px-14 py-4">
              Content
            </th>
            <th scope="row" className="px-6 py-4">
              Speakers
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 rounded-br-lg rounded-bl-lg">
          {day.map((eventDay) => {
            const { id, startTime, endTime, content, speakers } = eventDay;
            return (
              <tr key={id} className="flex items-center gap-8 w-full">
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-2 text-[0.9rem] text-gray-500">
                    <p>{`${startTime} to`}</p>
                    <p>{endTime}</p>
                  </div>
                </td>
                <td className="w-[300px] text-left text-[0.8rem] py-4">
                  {content}
                </td>
                <td key={id} className="flex flex-col gap-4 py-4">
                  {speakers.map((speaker) => {
                    const {
                      id,
                      speakerName,
                      speakerSocialMediaName,
                      speakerProfile,
                    } = speaker;
                    return (
                      <div key={id} className="flex gap-2">
                        <div className="w-[35px] rounded-full h-[35px] overflow-hidden">
                          <img src={speakerProfile} alt="speakerProfile" />
                        </div>
                        <div className="text-sm">
                          <p className="font-semibold text-xs">{speakerName}</p>
                          <small className="text-gray-500">
                            {speakerSocialMediaName}
                          </small>
                        </div>
                      </div>
                    );
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DayEvents;
