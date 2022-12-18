import React from "react";
import { Tippy } from "@/base-components";
import moment from "moment";

const imageAssets = import.meta.globEager(
  `/src/assets/images/*.{jpg,jpeg,png,svg}`
);

const ScheduleListDay = (props) => {
  const first = props.curr.getDate() - props.curr.getDay();
  const timeline = [
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
  ];
  const array = [];

  const getMultipleArray = () => {
    props.userData.map((user, index) => {
      array[index] = Array(12).fill(0);
      props.scheduleData
        .filter((e) => e.userid === index)
        .filter((e) => e.date == props.curr.getDate())
        .map((item) => {
          array[index].map((se, i) => {
            if (i === timeline.indexOf(item.start_time)) {
              array[index][i] =
                timeline.indexOf(item.end_time) -
                timeline.indexOf(item.start_time) +
                1;
            } else if (
              i > timeline.indexOf(item.start_time) &&
              i <= timeline.indexOf(item.end_time)
            ) {
              array[index][i] = 1;
            }
          });
        });
    });
  };

  const timediff = (start, end) => {
    const startTime = moment(start, "HH:mm:ss a");
    const endTime = moment(end, "HH:mm:ss a");
    const duration = moment.duration(endTime.diff(startTime));
    const hours = parseInt(duration.asHours());
    const minutes = parseInt(duration.asMinutes()) % 60;
    let resultstr = "";
    resultstr += "(";
    if(hours === 1) {
      resultstr += hours + 'hr'
    }
    if(hours > 1) {
      resultstr += hours + 'hrs'
    }
    if(minutes !== 0) {
      resultstr += minutes + 'mins'
    }
    resultstr += ")"
    return resultstr;
  };

  getMultipleArray();

  return (
    <>
      <div className="box mt-10 overflow-x-scroll">
        <table className="table">
          <thead>
            <tr>
              <th key={"daylist_Scheduled"} className="whitespace-nowrap">
                Scheduled Shift
              </th>
              {timeline.map((e, index) => (
                <th key={"daylist_" + index} className="whitespace-nowrap">
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.userData &&
              props.userData.map((user, index) => (
                <tr key={index} className="intro-x">
                  <td className="whitespace-nowrap">
                    <div className="flex">
                      <div className="w-10 h-10 image-fit zoom-in mr-3">
                        <Tippy
                          tag="img"
                          alt="Midone Tailwind HTML Admin Template"
                          className="rounded-full"
                          src={
                            imageAssets["/src/assets/images/profile-9.jpg"]
                              .default
                          }
                        />
                      </div>
                      <div className="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                        <div className="font-medium whitespace-nowrap">
                          {user.first_name + " " + user.last_name}
                        </div>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          {user.hourlyrate + "$/hr"}
                        </div>
                      </div>
                    </div>
                  </td>
                  {timeline.map((dateMember, i) => {
                    if (array[index][i] != 1) {
                      return array[index][i] == 0 ? (
                        <td key={"scheduleday_" + i}></td>
                      ) : (
                        <td
                          key={"scheduleday_" + i}
                          className="bg-yellow-500 text-center"
                          colSpan={array[index][i]}
                        >
                          <div className="w-64">
                            <div>
                              {timeline[i]} - {timeline[i + +array[index][i]-1]}{" "}
                              {timediff(
                                timeline[i],
                                timeline[i + array[index][i]-1]
                              )}
                            </div>
                            <div>General Manager - STOVE</div>
                          </div>
                        </td>
                      );
                    }
                  })}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ScheduleListDay;
