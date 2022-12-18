import React from "react";
import { Litepicker } from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";

const OvertimeModal = (props) => {
  return (
    <>
      <div className="px-5 mt-10">
        <div className="font-medium text-center text-lg">
          {props.state.isCreate ? "Add Overtime" : "Edit Overtime"}
        </div>
      </div>
      <div className="box grid grid-cols-12 gap-4 gap-y-5 mt-5 p-5">
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Select Employee
          </label>
          <select
            className="form-select"
            defaultValue={
              props.state.isCreate ? "" : props.state.data.users[0].name
            }
          >
            {$f()[0].users.map(function (i) {
              return <option key={i.name}>{i.name}</option>;
            })}
          </select>
        </div>
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Overtime Date
          </label>
          <Litepicker
            className="form-control block mx-auto"
            value={props.state.isCreate ? "" : props.state.data.dates[0]}
          />
        </div>
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Overtime Hours
          </label>
          <input
            type="text"
            className="form-control"
            defaultValue={props.state.isCreate ? "" : 2}
          />
        </div>
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            defaultValue={props.state.isCreate ? "" : "Lorem ipsum dollar"}
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

export default OvertimeModal;
