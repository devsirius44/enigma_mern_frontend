import React from "react";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";

const ProductModal = (props) => {
  return (
    <>
      <div className="px-5 mt-10">
        <div className="font-medium text-center text-lg">
          {props.state.isCreate ? "Add Menu Item" : "Edit Menu Item"}
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5 p-5">
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Category
          </label>
          <select className="form-select" defaultValue={props.state.isCreate ? "" : props.state.data.category}>
            {$_.take($f(), 3).map((faker, fakerKey) => (
              <option key={fakerKey} value={faker.menuCategories[fakerKey].name}>{faker.menuCategories[fakerKey].name}</option>
            ))}
          </select>
        </div>
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Item Name
          </label>
          <input
            id="input-wizard-1"
            type="text"
            className="form-control"
            defaultValue={
              props.state.isCreate ? "" : props.state.data.name
            }
            required
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

export default ProductModal;
