import React from "react";

const AttendanceAdminFilter = () => {
  return (
    <>
      <div className="intro-y grid grid-cols-4 gap-6 mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Employee Name"
        />
        <select className="form-select box">
          <option>Select Month</option>
          <option>Jan</option>
          <option>Feb</option>
          <option>Mar</option>
          <option>Apr</option>
          <option>May</option>
          <option>Jun</option>
          <option>Jul</option>
          <option>Aug</option>
          <option>Sep</option>
          <option>Oct</option>
          <option>Nov</option>
          <option>Dec</option>
        </select>
        <select className="form-select box">
          <option>Select Year</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
        </select>

        <button className="btn btn-primary shadow-md mr-2">SEARCH</button>
      </div>
    </>
  );
};

export default AttendanceAdminFilter;
