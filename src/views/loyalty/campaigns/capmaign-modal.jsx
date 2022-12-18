import React from "react";
import { Litepicker } from "@/base-components";
import { faker as $f } from "@/utils";
import Multiselect from "react-widgets/Multiselect";
import "react-widgets/styles.css";
import * as $_ from "lodash";

const CampaignModal = (props) => {
  const bounsOption = [1, 2, 3, 4, 5];

  function filter(item, value) {
    return item.toLowerCase().includes(value.toLowerCase());
  }

  return (
    <>
      <div className="px-5 mt-10">
        <div className="font-medium text-center text-lg">
          {props.state.isCreate ? "Create Campaign" : "Edit Campaign"}
        </div>
      </div>
      <div className="box grid grid-cols-12 gap-4 gap-y-5 mt-5 p-5">
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Loyalty Code
          </label>
          <input
            type="text"
            className="form-control"
            defaultValue={props.state.isCreate ? "" : $f()[0].users[0].name}
          ></input>
        </div>
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Day & time bouns
          </label>
          <Multiselect
            data={bounsOption}
            filter={filter}
            value={props.state.isCreate ? [] : [1, 2, 3]}
          />
        </div>

        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-3" className="form-label">
            Dining option bonus
          </label>
          <input
            type="number"
            className="form-control"
            defaultValue={props.state.isCreate ? "" : 10}
          />
        </div>
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-4" className="form-label">
            Signup bonus
          </label>
          <input
            type="number"
            className="form-control"
            defaultValue={props.state.isCreate ? "" : 10}
          />
        </div>
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-4" className="form-label">
            Birthday treat
          </label>
          <input
            type="number"
            className="form-control"
            defaultValue={props.state.isCreate ? "" : 10}
          />
        </div>

        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-4" className="form-label">
            Promotion Message
          </label>
          <textarea
            className="form-control"
            defaultValue={
              props.state.isCreate ? "" : "Promotion Message is ...."
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
            {$_.take($f(), 4).map((faker, fakerKey) => (
              <option>
                <a
                  href="#"
                  className="font-medium whitespace-nowrap"
                  onClick={() => {
                    props.onShowModal({
                      show: true,
                      isCreate: false,
                      data: faker.menuCategories[fakerKey],
                    });
                  }}
                >
                  {faker.users[0].name}
                </a>
              </option>
            ))}
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

export default CampaignModal;
