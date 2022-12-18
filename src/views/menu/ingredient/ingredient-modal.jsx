import React from "react";

const IngredientModal = (props) => {
  return (
    <>
      <div className="px-5 mt-10">
        <div className="font-medium text-center text-lg">
          {props.state.isCreate ? "Add Ingredient" : "Edit Ingredient"}
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5 p-5">
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Ingredient Name
          </label>
          <input
            id="input-wizard-1"
            type="text"
            className="form-control"
            defaultValue={props.state.isCreate ? "" : props.state.data.name}
            required
          />
        </div>
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Ingredient Unit
          </label>
          <input
            id="input-wizard-1"
            type="text"
            className="form-control"
            defaultValue={props.state.isCreate ? "" : props.state.data.unit}
            required
          />
        </div>
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Ingredient Price
          </label>
          <div className="input-group">
            <div className="input-group-text">$</div>
            <input
              type="text"
              className="form-control"
              placeholder="Price"
              defaultValue={props.state.isCreate ? "" : props.state.data.price}
              required
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

export default IngredientModal;
