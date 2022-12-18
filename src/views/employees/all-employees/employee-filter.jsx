import { isPropsEqual } from "@fullcalendar/core";
import React, { useState } from "react";

const EmployeeFilter = (props) => {
  const [employeeId, setEmployeeId] = useState();
  const [employeeName, setEmployeeName] = useState();
  return (
    <>
      <div className="grid grid-cols-4 gap-6 mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Employee ID"
          onChange={(e) => {
            setEmployeeId(e.target.value);
          }}
        />

        <input
          type="text"
          className="form-control"
          placeholder="Employee Name"
          onChange={(e) => {
            setEmployeeName(e.target.value);
          }}
        />

        <select className="form-select box">
          <option>Select Designation</option>
          <option>Web Developer</option>
          <option>Web Designer</option>
          <option>Android Developer</option>
          <option>Ios Developer</option>
        </select>

        <button
          className="btn btn-primary shadow-md mr-2"
          onClick={() => {
            const keywords = {
              employeeId: employeeId,
              employeeName: employeeName,
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

export default EmployeeFilter;
