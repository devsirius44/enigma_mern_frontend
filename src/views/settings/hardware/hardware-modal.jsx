import React from "react";

const HardwareModal = (props) => {
  return (
    <>
      <div className="intro-y box lg:mt-5">
        <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
          <h2 className="font-medium text-base mr-auto text-center">
            {props.state.isCreate ? "Add Hardware" : "Edit Hardware"}
          </h2>
        </div>
        <div className="p-5">
          <div className="flex flex-col-reverse xl:flex-row">
            <div className="flex-1 mt-6 xl:mt-0">
              <div className="grid grid-cols-12 gap-x-5">
                <div className="col-span-12 2xl:col-span-6">
                  <div>
                    <label
                      htmlFor="update-profile-form-1"
                      className="form-label"
                    >
                      Hardware Name
                    </label>
                    <input
                      id="update-profile-form-1"
                      type="text"
                      className="form-control"
                      value=""
                      onChange={() => {}}
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="update-profile-form-2"
                      className="form-label"
                    >
                      Hardware ID
                    </label>
                    <input
                      id="update-profile-form-2"
                      type="text"
                      className="form-control"
                      value=""
                      onChange={() => {}}
                    />
                  </div>
                </div>
              </div>

              <div className="intro-y col-span-12 flex items-center justify-center mt-5">
                <button
                  type="button"
                  className="btn btn-primary w-20 mt-3 mr-3"
                >
                  {props.state.isCreate ? "Submit" : "Save"}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary w-20 mt-3"
                  onClick={() => {
                    props.onShowModal({ show: false });
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HardwareModal;
