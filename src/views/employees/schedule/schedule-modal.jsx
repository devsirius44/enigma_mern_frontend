import React from "react";
import { Litepicker } from "@/base-components";
import { faker as $f } from "@/utils";

import * as $_ from "lodash";
import WeekDayPicker from "./weekdaypicker";

const ScheduleModal = (props) => {
  console.log(props.state.data);
  return (
    <>
      <div className="px-5 mt-10">
        <div className="font-medium text-center text-lg">
          {props.state.isCreate ? "Add Schedule" : "Edit Schedule"}
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5 p-5">
        <div className="intro-y col-span-6 sm:col-span-6">
          <label htmlFor="input-wizard-1" className="form-label">
            Date
          </label>
          <Litepicker
            placeholder="Select Date"
            className="form-control block mx-auto"
            value={props.state.isCreate ? "" : "2022/04/23"}
          />
        </div>
        <div className="intro-y col-span-6 sm:col-span-6">
          <label htmlFor="input-wizard-1" className="form-label">
            Shifts
          </label>
          <select className="form-select col-span-3">
            <option>10's oclock shift</option>
            <option>10:30 shift</option>
            <option>Daily shift</option>
            <option>Manager shift</option>
            <option>New shift</option>
          </select>
        </div>
        <div className="intro-y col-span-6 sm:col-span-6">
          <label htmlFor="input-wizard-1" className="form-label">
            Department
          </label>
          <select
            className="form-select col-span-3"
            defaultValue={props.state.isCreate ? "" : "Manager"}
          >
            <option>All Department</option>
            {$_.take($f(), 5).map((faker, fakerKey) => (
              <option key={fakerKey}>
                {faker.departments[fakerKey].departmentName}
              </option>
            ))}
          </select>
        </div>
        <div className="intro-y col-span-6 sm:col-span-6">
          <label htmlFor="input-wizard-1" className="form-label">
            Employee Name
          </label>
          <select className="form-select col-span-3">
            {$f()[0].users.map(function (user) {
              return <option key={user.name}>{user.name}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="px-5 mt-5 mb-5 text-center">
        <button className="btn btn-primary w-24 ml-2">
          {props.state.isCreate ? "Submit" : "Save"}
        </button>
        <button
          className="btn btn-secondary w-24 ml-2"
          onClick={() => {
            props.onShowModal({ show: false });
          }}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default ScheduleModal;
