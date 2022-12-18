import React, { useState } from "react";

const WeekDayButton = (props) => {
  const [clickState, setClickState] = useState(false);
  return (
    <>
      {!clickState ? (
        <button
          className="btn btn-secondary mr-1 mb-2"
          onClick={() => {
            setClickState(!clickState);
          }}
        >
          {props.day}
        </button>
      ) : (
        <button
          className="btn btn-danger mr-1 mb-2"
          onClick={() => {
            setClickState(!clickState);
          }}
        >
          {props.day}
        </button>
      )}
    </>
  );
};

const WeekDayPicker = () => {
  return (
    <>
      <WeekDayButton day={"M"} />
      <WeekDayButton day={"T"} />
      <WeekDayButton day={"W"} />
      <WeekDayButton day={"T"} />
      <WeekDayButton day={"F"} />
      <WeekDayButton day={"S"} />
      <WeekDayButton day={"S"} />
    </>
  );
};

export default WeekDayPicker;
