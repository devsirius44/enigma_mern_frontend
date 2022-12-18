import React from "react";
import { Litepicker } from "@/base-components";

const AttendanceEmployeeFilter = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-6 mt-5 intro-y">
        <Litepicker className="form-control box" placeholder="Select Date" />

        <select className="form-select box" placeholder="Select Month">
          <option>Select Month</option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>

        <select className="form-select box" placeholder="Select Year">
          <option>Select Year</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </select>

        <button className="btn btn-primary shadow-md mr-2">SEARCH</button>
      </div>
    </>
  );
};

export default AttendanceEmployeeFilter;
