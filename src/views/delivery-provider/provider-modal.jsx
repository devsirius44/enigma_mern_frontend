import React, { useState } from "react";

const ProviderModal = (props) => {
  const [provider, setProvider] = useState(props.state.data);
  return (
    <>
      <div className="px-5 mt-10">
        <div className="font-medium text-center text-lg">
          {props.state.isCreate ? "Add Provider" : "Edit Provider"}
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
            defaultValue={props.state.isCreate ? "" : provider.name}
            required
          />
        </div>
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            API Key
          </label>
          <input
            id="input-wizard-1"
            type="text"
            className="form-control"
            placeholder="Input API Key"
            defaultValue={props.state.isCreate ? "" : provider.api_key}
            required
          />
        </div>
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Input email"
            defaultValue={props.state.isCreate ? "" : provider.email}
          ></input>
        </div>

        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Password
          </label>
          <input
            id="input-wizard-1"
            type="text"
            className="form-control"
            placeholder="Input Password"
            defaultValue={props.state.isCreate ? "" : provider.password}
            required
          />
        </div>

        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Regular Markup Rate
          </label>
          <input
            id="input-wizard-1"
            type="text"
            className="form-control"
            placeholder="Input rate"
            defaultValue={props.state.isCreate ? "" : provider.regular_markup_rate}
            required
          />
        </div>

        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Priority Level
          </label>
          <input
            id="input-wizard-1"
            type="text"
            className="form-control"
            placeholder="Input priority level"
            defaultValue={props.state.isCreate ? "" : provider.priority}
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

export default ProviderModal;
