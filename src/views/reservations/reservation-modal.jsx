import React, { useState } from "react";
import { Litepicker, TomSelect } from "@/base-components";

const ReservationModal = (props) => {
  const [preference, setPreference] = useState([]);
  const [specialOcassion, setSpecialOcassion] = useState([]);
  const [tableType, setTableType] = useState("1");
  const [locator, setLocator] = useState("1");

  return (
    <>
      <div className="intro-y box lg:mt-5">
        <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
          <h2 className="font-medium text-base mr-auto text-center">
            {props.state.isCreate ? "Add Reservation" : "Edit Reservation"}
          </h2>
        </div>
        <div className="p-5">
          <div className="flex flex-col-reverse xl:flex-row">
            <div className="flex-1 mt-6 xl:mt-0">
              <div className="grid grid-cols-12 md:grid-cols-2 gap-x-5">
                <div className="mb-3">
                  <label htmlFor="update-profile-form-1" className="form-label">
                    First Name
                  </label>
                  <input
                    id="update-profile-form-1"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="update-profile-form-2" className="form-label">
                    Last Name
                  </label>
                  <input
                    id="update-profile-form-2"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="update-profile-form-2" className="form-label">
                    Phone Number
                  </label>
                  <input
                    id="update-profile-form-2"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="update-profile-form-2" className="form-label">
                    Customer ID
                  </label>
                  <input
                    id="update-profile-form-2"
                    type="text"
                    disabled
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="update-profile-form-2" className="form-label">
                    Loyalty ID
                  </label>
                  <input
                    id="update-profile-form-2"
                    type="text"
                    disabled
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="update-profile-form-2" className="form-label">
                    Preference
                  </label>
                  <TomSelect
                    value={preference}
                    onChange={setPreference}
                    options={{
                      placeholder: "Select your preference",
                    }}
                    className="w-full"
                    multiple
                  >
                    <option value="1">Leonardo DiCaprio</option>
                    <option value="2">Johnny Deep</option>
                    <option value="3">Robert Downey, Jr</option>
                    <option value="4">Samuel L. Jackson</option>
                    <option value="5">Morgan Freeman</option>
                  </TomSelect>
                </div>
                <div className="mb-3">
                  <label htmlFor="update-profile-form-2" className="form-label">
                    Special Occasions
                  </label>
                  <TomSelect
                    value={specialOcassion}
                    onChange={setSpecialOcassion}
                    options={{
                      placeholder: "Select special occasions",
                    }}
                    className="w-full"
                    multiple
                  >
                    <option value="1">Leonardo DiCaprio</option>
                    <option value="2">Johnny Deep</option>
                    <option value="3">Robert Downey, Jr</option>
                    <option value="4">Samuel L. Jackson</option>
                    <option value="5">Morgan Freeman</option>
                  </TomSelect>
                </div>
                <div className="mb-3">
                  <label htmlFor="update-profile-form-2" className="form-label">
                    Locator
                  </label>
                  <TomSelect
                    value={locator}
                    onChange={setLocator}
                    options={{
                      placeholder: "Select your favorite actors",
                    }}
                    className="w-full"
                  >
                    <option value="1">Leonardo DiCaprio</option>
                    <option value="2">Johnny Deep</option>
                    <option value="3">Robert Downey, Jr</option>
                    <option value="4">Samuel L. Jackson</option>
                    <option value="5">Morgan Freeman</option>
                  </TomSelect>
                </div>
                <div className="mb-3">
                  <label htmlFor="update-profile-form-2" className="form-label">
                    Adults
                  </label>
                  <input
                    id="update-profile-form-2"
                    type="number"
                    step={1}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="update-profile-form-2" className="form-label">
                    Children
                  </label>
                  <input
                    id="update-profile-form-2"
                    type="number"
                    step={1}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="update-profile-form-2" className="form-label">
                    High Chair
                  </label>
                  <input
                    id="update-profile-form-2"
                    type="number"
                    step={1}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="update-profile-form-2" className="form-label">
                    Table Type
                  </label>
                  <TomSelect
                    value={tableType}
                    onChange={setTableType}
                    options={{
                      placeholder: "Select your favorite actors",
                    }}
                    className="w-full"
                  >
                    <option value="1">Leonardo DiCaprio</option>
                    <option value="2">Johnny Deep</option>
                    <option value="3">Robert Downey, Jr</option>
                    <option value="4">Samuel L. Jackson</option>
                    <option value="5">Morgan Freeman</option>
                  </TomSelect>
                </div>
                <div className="mb-3">
                  <label htmlFor="update-profile-form-2" className="form-label">
                    Table
                  </label>
                  <input
                    id="update-profile-form-2"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="update-profile-form-2" className="form-label">
                    Time
                  </label>
                  <input
                    id="update-profile-form-2"
                    type="time"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="update-profile-form-2" className="form-label">
                    Special request
                  </label>
                  <textarea
                    id="update-profile-form-2"
                    type="text"
                    className="form-control"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="update-profile-form-2" className="form-label">
                    Notes
                  </label>
                  <textarea
                    id="update-profile-form-2"
                    type="text"
                    className="form-control"
                  ></textarea>
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

export default ReservationModal;
