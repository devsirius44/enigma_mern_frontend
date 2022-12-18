import React, { useState } from "react";
import AttendanceEmployeeHeader from "./attendance-employee-header";
import AttendanceEmployeeStatebox from "./attendance-employee-statebox";
import AttendanceEmployeeFilter from "./attendance-employee-filter";
import AttendanceEmployeeList from "./attendance-employee-list";

const AllAttendanceEmployee = () => {
  return (
    <>
      <AttendanceEmployeeHeader />
      <AttendanceEmployeeStatebox />
      <AttendanceEmployeeFilter />
      <AttendanceEmployeeList />
    </>
  );
};

export default AllAttendanceEmployee;
