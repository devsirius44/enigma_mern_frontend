import React from "react";
import { Litepicker } from "@/base-components";

const EmployeeTimecardFilter = () => {
  return (
    <>
      <div className="intro-y grid grid-cols-12 gap-6 mt-5">
        <Litepicker
          className="form-control block mx-auto col-span-2"
          placeholder="Start Date"
        />
        <Litepicker
          className="form-control block mx-auto col-span-2"
          placeholder="End Date"
        />
        <button className="btn btn-primary shadow-md mr-2 col-span-2">
          VIEW
        </button>
      </div>
    </>
  );
};

export default EmployeeTimecardFilter;
