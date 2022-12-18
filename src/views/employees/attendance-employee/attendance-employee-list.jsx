import React from "react";

const AttendanceEmployeeList = (props) => {
  return (
    <div className="box gap-6 mt-5">
      <div className="overflow-x-auto">
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="whitespace-nowrap">#</th>
              <th className="whitespace-nowrap">Date</th>
              <th className="whitespace-nowrap">Punch In</th>
              <th className="whitespace-nowrap">Punch Out</th>
              <th className="whitespace-nowrap">Production</th>
              <th className="whitespace-nowrap">Break</th>
              <th className="whitespace-nowrap">Overtime</th>
            </tr>
          </thead>
          <tbody>
            <tr className="intro-x">
              <td>1</td>
              <td>19 Feb 2022</td>
              <td>10 AM</td>
              <td>7 PM</td>
              <td>9 hrs</td>
              <td>1 hrs</td>
              <td>0</td>
            </tr>
            <tr className="intro-x">
              <td>1</td>
              <td>20 Feb 2022</td>
              <td>10 AM</td>
              <td>7 PM</td>
              <td>9 hrs</td>
              <td>1 hrs</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceEmployeeList;
