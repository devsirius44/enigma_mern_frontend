import { isPropsEqual } from "@fullcalendar/core";
import React, { useState } from "react";

const HardwareFilter = (props) => {
  const [hardwareId, setHardwareId] = useState();
  const [hardwareName, setHardwareName] = useState();
  return (
    <>
      <div className="grid grid-cols-4 gap-6 mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Hardware ID"
          onChange={(e) => {
            setHardwareId(e.target.value);
          }}
        />

        <input
          type="text"
          className="form-control"
          placeholder="Hardware Name"
          onChange={(e) => {
            setHardwareName(e.target.value);
          }}
        />

        <select className="form-select box">
          <option>Select Hardware</option>
          <option>Hardware 1</option>
          <option>Hardware 2</option>
          <option>Hardware 3</option>
          <option>Hardware 4</option>
        </select>

        <button
          className="btn btn-primary shadow-md mr-2"
          onClick={() => {
            const keywords = {
              hardwareId: hardwareId,
              hardwareName: hardwareName,
            };
            props.onFilter(keywords);
          }}
        >
          SEARCH
        </button>
      </div>
    </>
  );
};

export default HardwareFilter;
