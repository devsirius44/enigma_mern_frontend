import React, { useState, useEffect } from "react";
import { faker as $f } from "@/utils";
import { Litepicker } from "@/base-components";
import ScheduleListDay from "./schedule-list-day";
import ScheduleListWeek from "./schedule-list-week";

const ScheduleList = (props) => {
  const [userData, setUserData] = useState();
  const [scheduleData, setScheduleData] = useState();
  const [isWeek, setIsWeek] = useState(true);
  const [curr, setCurr] = useState(new Date())
  
  useEffect(() => {
    if (props.userData !== undefined) {
      setUserData(props.userData);
    }
    setScheduleData($f()[0].schedules);
    

    let temp = [];
    for (let i = 0; i < props.userData?.length; i++) {
      temp[i] = [];
      for (let j = 0; j < 9; j++) {
        temp[i][j] = { id: i * 9 + j, content: "" };
      }
    }
    $f()[0].schedules?.map((e) => {
      // temp?.[parseInt(e.userid)]?.[parseInt(e.date-21)]?.content = "6:30 am - 9:30 pm (14 hrs 15 mins)"
      console.log(
        "11",
        parseInt(e.userid),
        parseInt(e.date - 21),
        temp[parseInt(e.userid)]?.at(parseInt(e.date - 21)).content
      );
    });
    console.log(temp);
  }, [props.userData]);

  const handleDay = () => {
    setIsWeek(false);
  };

  const handleWeek = () => {
    setIsWeek(true);
  };

  return (
    <>
      <div className="mt-10 flex">
        {isWeek ? (
          <div className="mx-auto"></div>
        ) : (
          <Litepicker
            className="form-control w-56 mx-auto col-span-2"
            placeholder="Choose Date"
            value={String(curr)}
            onChange={setCurr}
          />
        )}
        <button
          className={
            isWeek ? "btn btn-primary w-20 mr-2" : "btn btn-warning w-20 mr-2"
          }
          onClick={handleDay}
        >
          Day
        </button>
        <button
          className={
            isWeek ? "btn btn-warning w-20 mr-2" : "btn btn-primary w-20 mr-2"
          }
          onClick={handleWeek}
        >
          Week
        </button>
      </div>
      {isWeek ? (
        <ScheduleListWeek
          userData={userData}
          scheduleData={scheduleData}
          setScheduleData={setScheduleData}
          onShowModal={props.onShowModal}
        />
      ) : (
        <ScheduleListDay userData={userData} scheduleData={scheduleData} curr={new Date(curr)} setCurr={setCurr}/>
      )}
    </>
  );
};

export default ScheduleList;
