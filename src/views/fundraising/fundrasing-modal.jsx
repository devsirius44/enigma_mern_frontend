import React from "react";
import { Litepicker } from "@/base-components";
import { faker as $f } from "@/utils";
import Multiselect from "react-widgets/Multiselect";
import "react-widgets/styles.css";
import * as $_ from "lodash";

const FundraisingModal = (props) => {
  const venueOption = [
    "Breakfast Grill",
    "Breakfast Grill East Valley",
    "Breakfast Grill  Main St",
    "Breakfast Grill San Fran",
    "Breakfast Grill Red Woods",
    "Breakfast Grill Napa",
  ];

  function filter(item, value) {
    return item.toLowerCase().includes(value.toLowerCase());
  }

  return (
    <>
      <div className="px-5 mt-10">
        <div className="font-medium text-center text-lg">
          {props.state.isCreate ? "Add Fundraising" : "Edit Fundraising"}
        </div>
      </div>
      <div className="box grid grid-cols-12 gap-4 gap-y-5 mt-5 p-5">
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Code
          </label>
          <input
            type="text"
            className="form-control"
            defaultValue={props.state.isCreate ? "" : $f()[0].users[0].name}
          ></input>
        </div>
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Choose Venues
          </label>
          <Multiselect
            data={venueOption}
            filter={filter}
            value={
              props.state.isCreate
                ? []
                : ["Breakfast Grill San Fran", "Breakfast Grill Napa"]
            }
          />
        </div>

        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-3" className="form-label">
            How much by default
          </label>
          <div className="input-group">
            <div className="input-group-text">$</div>
            <input
              type="number"
              className="form-control"
              defaultValue={props.state.isCreate ? "" : 10}
            />
          </div>
        </div>
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-4" className="form-label">
            Type of Discount
          </label>
          <select
            className="form-select"
            defaultValue={props.state.isCreate ? "" : "dollar"}
          >
            <option value="dollar">Dollar</option>
            <option value="percentage">Percentage</option>
          </select>
        </div>

        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-4" className="form-label">
            Fundraiser Description
          </label>
          <textarea
            className="form-control"
            defaultValue={
              props.state.isCreate ? "" : "Fundraiser Description is ...."
            }
          ></textarea>
        </div>

        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-4" className="form-label">
            Apply to
          </label>
          <select
            className="form-select"
            defaultValue={props.state.isCreate ? "" : "2"}
          >
            <option value="1">Item</option>
            <option value="2">Order</option>
          </select>
        </div>

        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-4" className="form-label">
            Active
          </label>
          <div className=" form-check form-switch">
            <input
              id="product-status-active"
              className="form-check-input"
              type="checkbox"
            />
          </div>
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

export default FundraisingModal;
