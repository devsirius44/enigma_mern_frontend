import React from "react";
import { Litepicker } from "@/base-components";
import WeekDayPicker from "./weekdaypicker";

const ShiftModal = (props) => {
  console.log(props.state.data);

  return (
    <>
      <div className="px-5 mt-10">
        <div className="font-medium text-center text-lg">
          {props.state.isCreate ? "Add Shift" : "Edit Shift"}
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5 p-5">
        <div className="intro-y col-span-12 sm:col-span-12">
          <label className="form-label">Shift Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Input Time"
            defaultValue={props.state.isCreate ? "" : "10'o clock shift"}
          />
        </div>
        <div className="intro-y col-span-4 sm:col-span-4">
          <label className="form-label">Min Start Time</label>
          <input
            type="text"
            className="form-control"
            placeholder="Input Time"
            defaultValue={props.state.isCreate ? "" : "6:11 am"}
          />
        </div>
        <div className="intro-y col-span-4 sm:col-span-4">
          <label className="form-label">Start Time</label>
          <input
            type="text"
            className="form-control"
            placeholder="Input Time"
            defaultValue={props.state.isCreate ? "" : "10:30 pm"}
          />
        </div>
        <div className="intro-y col-span-4 sm:col-span-4">
          <label className="form-label">Max Start Time</label>
          <input
            type="text"
            className="form-control"
            placeholder="Input Time"
            defaultValue={props.state.isCreate ? "" : "12 pm"}
          />
        </div>
        <div className="intro-y col-span-4 sm:col-span-4">
          <label className="form-label">Min End Time</label>
          <input
            type="text"
            className="form-control"
            placeholder="Input Time"
            defaultValue={props.state.isCreate ? "" : "1:25 am"}
          />
        </div>
        <div className="intro-y col-span-4 sm:col-span-4">
          <label className="form-label">End Time</label>
          <input
            type="text"
            className="form-control"
            placeholder="Input Time"
            defaultValue={props.state.isCreate ? "" : "5:25 pm"}
          />
        </div>
        <div className="intro-y col-span-4 sm:col-span-4">
          <label className="form-label">Max End Time</label>
          <input
            type="text"
            className="form-control"
            placeholder="Input Time"
            defaultValue={props.state.isCreate ? "" : "3:20 pm"}
          />
        </div>
        <div className="intro-y col-span-4 sm:col-span-4">
          <label className="form-label">Break Time</label>
          <input
            type="text"
            className="form-control"
            placeholder="Input Time"
            defaultValue={props.state.isCreate ? "" : "45"}
          />
        </div>
        <div class="flex items-center col-span-12">
          <input
            id="checked-checkbox1"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Recurring Shift
          </label>
        </div>
        <div className="intro-y col-span-12 sm:col-span-12 gap-2">
          <label htmlFor="input-wizard-1" className="form-label mr-2">
            Repeat everyday
          </label>
          <select
            className="form-select w-fit mr-2"
            defaultValue={props.state.isCreate ? "" : "0"}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
          weeks
        </div>
        <div className="col-span-12">
          <WeekDayPicker />
        </div>
        <div className="intro-y col-span-6 sm:col-span-6">
          <label htmlFor="input-wizard-1" className="form-label">
            End On
          </label>
          <Litepicker
            placeHolder="Select Date"
            className="form-control block mx-auto"
            value={props.state.isCreate ? "" : "2022/04/23"}
          />
        </div>
        <div class="flex items-center col-span-12">
          <input
            id="checked-checkbox1"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Indefinite
          </label>
        </div>
        <div class="flex items-center col-span-12">
          <input
            id="checked-checkbox1"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Accept Extra Hours
          </label>
        </div>
        <div class="flex items-center col-span-12">
          <input
            id="checked-checkbox2"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="checked-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Publish
          </label>
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

export default ShiftModal;
