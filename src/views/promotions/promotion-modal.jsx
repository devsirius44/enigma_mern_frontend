import React, { useState } from "react";
import { Litepicker } from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";

const PromotionModal = (props) => {
  const [promotion, setPromotion] = useState(props.state.data);
  return (
    <>
      <div className="px-5 mt-10">
        <div className="font-medium text-center text-lg">
          {props.state.isCreate ? "Add Promotion" : "Edit Promotion"}
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5 p-5">
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Name
          </label>
          <input
            id="input-wizard-1"
            type="text"
            className="form-control"
            placeholder="Input Name"
            defaultValue={props.state.isCreate ? "" : promotion.promo_name}
            required
          />
        </div>
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Code
          </label>
          <input
            id="input-wizard-1"
            type="text"
            className="form-control"
            placeholder="Input Code"
            defaultValue={props.state.isCreate ? "" : promotion.promo_code}
            required
          />
        </div>
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Type
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Input Type"
            defaultValue={props.state.isCreate ? "" : promotion.promo_type}
          ></input>
        </div>

        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Value
          </label>
          <input
            id="input-wizard-1"
            type="text"
            className="form-control"
            placeholder="Input Value"
            defaultValue={props.state.isCreate ? "" : promotion.promo_value}
            required
          />
        </div>

        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Button Text
          </label>
          <input
            id="input-wizard-1"
            type="text"
            className="form-control"
            placeholder="Input Button Text"
            defaultValue={props.state.isCreate ? "" : promotion.buttonText}
            required
          />
        </div>

        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Receipt Text
          </label>
          <input
            id="input-wizard-1"
            type="text"
            className="form-control"
            placeholder="Input Receipt Text"
            defaultValue={props.state.isCreate ? "" : promotion.receiptText}
            required
          />
        </div>

        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Approval by
          </label>
          <select
            id="input-wizard-1"
            type="text"
            className="form-control"
            placeholder="Input Receipt Text"
            defaultValue={props.state.isCreate ? "" : promotion.receiptText}
            required
          >
            <option>Casher</option>
            <option>Manager</option>
            <option>Admin</option>
          </select>
        </div>

        <div className="intro-y col-span-6 sm:col-span-6">
          <label htmlFor="input-wizard-1" className="form-label">
            Include Tax
          </label>
          <div className="w-full mt-3 xl:mt-0 flex-1">
            <div className="form-check form-switch">
              <input
                id="product-status-active"
                className="form-check-input"
                type="checkbox"
                checked={props.state.isCreate ? false : promotion.includeTax}
              />
            </div>
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

export default PromotionModal;
