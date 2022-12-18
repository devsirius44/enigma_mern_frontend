import React from "react";
import { Litepicker } from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";

const TimesheetModal = (props) => {
  return (
    <>
      <div className="px-5 mt-10">
        <div className="font-medium text-center text-lg">
          {props.state.isCreate
            ? "Add Today Work Details"
            : "Edit Work Details"}
        </div>
      </div>
      <div className="box grid grid-cols-12 gap-4 gap-y-5 mt-5 p-5">
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Projects
          </label>
          <select
            className="form-select"
            defaultValue={
              props.state.isCreate ? "" : props.state.data.projects[0]
            }
          >
            {$f()[0].projects.map(function (i) {
              return <option key={i}>{i}</option>;
            })}
          </select>
        </div>
        <div className="intro-y col-span-4 sm:col-span-4">
          <label htmlFor="input-wizard-1" className="form-label">
            Deadline
          </label>
          <Litepicker
            className="form-control block mx-auto"
            value={"2022/04/23"}
            readOnly
          />
        </div>
        <div className="intro-y col-span-4 sm:col-span-4">
          <label htmlFor="input-wizard-1" className="form-label">
            Total Hours
          </label>
          <input
            id="input-wizard-1"
            type="text"
            className="form-control"
            defaultValue={100}
            readOnly
          />
        </div>
        <div className="intro-y col-span-4 sm:col-span-4">
          <label htmlFor="input-wizard-1" className="form-label">
            Remaining Hours
          </label>
          <input
            id="input-wizard-2"
            type="text"
            className="form-control"
            defaultValue={60}
            readOnly
          />
        </div>
        <div className="intro-y col-span-6 sm:col-span-6">
          <label htmlFor="input-wizard-3" className="form-label">
            Date
          </label>
          <Litepicker
            className="form-control block mx-auto"
            value={props.state.isCreate ? "" : props.state.data.dates[0]}
          />
        </div>
        <div className="intro-y col-span-6 sm:col-span-6">
          <label htmlFor="input-wizard-3" className="form-label">
            Hours
          </label>
          <input
            type="text"
            className="form-control"
            defaultValue={props.state.isCreate ? "" : 10}
          />
        </div>
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-4" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            defaultValue={
              props.state.isCreate
                ? ""
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nDonec vel elit neque."
            }
          />
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

export default TimesheetModal;
