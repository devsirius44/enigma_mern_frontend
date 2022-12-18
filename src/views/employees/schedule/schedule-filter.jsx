import React, { useState } from "react";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";

const ScheduleFilter = (props) => {
  const [employeeName, setEmployeeName] = useState();
  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <input
          type="text"
          className="form-control col-span-3"
          placeholder="Employee Name"
          onChange={(e) => {
            setEmployeeName(e.target.value);
          }}
        />

        <select className="form-select box col-span-3">
          <option>All Department</option>
          {$_.take($f(), 5).map((faker, fakerKey) => (
            <option key={fakerKey}>
              {faker.departments[fakerKey].departmentName}
            </option>
          ))}
        </select>

        <button
          className="btn btn-primary shadow-md mr-2 col-span-2"
          onClick={() => {
            const keywords = { employeeName: employeeName };
            props.onFilter(keywords);
          }}
        >
          SEARCH
        </button>
      </div>
    </>
  );
};

export default ScheduleFilter;
