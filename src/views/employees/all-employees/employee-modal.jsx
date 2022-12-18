import React from "react";
import { faker as $f } from "@/utils";
import { Litepicker } from "@/base-components";

const EmployeeModal = (props) => {
  return (
    <>
      <div className="intro-y box lg:mt-5">
        <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
          <h2 className="font-medium text-base mr-auto text-center">
            {props.state.isCreate ? "Add Employee" : "Edit Employee"}
          </h2>
        </div>
        <div className="p-5">
          <div className="flex flex-col-reverse xl:flex-row flex-col">
            <div className="flex-1 mt-6 xl:mt-0">
              <div className="grid grid-cols-12 gap-x-5">
                <div className="col-span-12 2xl:col-span-6">
                  <div>
                    <label
                      htmlFor="update-profile-form-1"
                      className="form-label"
                    >
                      First Name
                    </label>
                    <input
                      id="update-profile-form-1"
                      type="text"
                      className="form-control"
                      value={
                        !props.state.isCreate
                          ? props.state.data.users[0].name
                          : ""
                      }
                      onChange={() => {}}
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="update-profile-form-2"
                      className="form-label"
                    >
                      User Name
                    </label>
                    <input
                      id="update-profile-form-2"
                      type="text"
                      className="form-control"
                      value={
                        !props.state.isCreate
                          ? props.state.data.users[0].name
                          : ""
                      }
                      onChange={() => {}}
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="update-profile-form-2"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      id="update-profile-form-2"
                      type="text"
                      className="form-control"
                      value={!props.state.isCreate ? "" : ""}
                      onChange={() => {}}
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="update-profile-form-2"
                      className="form-label"
                    >
                      EmployeeID
                    </label>
                    <input
                      id="update-profile-form-2"
                      type="text"
                      className="form-control"
                      value={!props.state.isCreate ? "FF-000012" : ""}
                      onChange={() => {}}
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="update-profile-form-2"
                      className="form-label"
                    >
                      Phone
                    </label>
                    <input
                      id="update-profile-form-2"
                      type="text"
                      className="form-control"
                      value={!props.state.isCreate ? "9876543210" : ""}
                      onChange={() => {}}
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="update-profile-form-2"
                      className="form-label"
                    >
                      Department
                    </label>
                    <select className="form-select">
                      <option>Select Department</option>
                      <option>Web Development</option>
                      <option>IT Management</option>
                      <option>Marketing</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-12 2xl:col-span-6">
                  <div>
                    <label
                      htmlFor="update-profile-form-2"
                      className="form-label"
                    >
                      Last Name
                    </label>
                    <input
                      id="update-profile-form-2"
                      type="text"
                      className="form-control"
                      value={
                        !props.state.isCreate
                          ? props.state.data.users[0].name
                          : ""
                      }
                      onChange={() => {}}
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="update-profile-form-2"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                      id="update-profile-form-2"
                      type="text"
                      className="form-control"
                      value={
                        !props.state.isCreate
                          ? props.state.data.users[0].email
                          : ""
                      }
                      onChange={() => {}}
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="update-profile-form-2"
                      className="form-label"
                    >
                      Confirm Password
                    </label>
                    <input
                      id="update-profile-form-2"
                      type="text"
                      className="form-control"
                      value={""}
                      onChange={() => {}}
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="update-profile-form-2"
                      className="form-label"
                    >
                      Joining Date
                    </label>
                    <Litepicker
                      options={{
                        autoApply: false,
                        showWeekNumbers: true,
                        dropdowns: {
                          minYear: 1990,
                          maxYear: null,
                          months: true,
                          years: true,
                        },
                      }}
                      className="form-control block mx-auto"
                      value={
                        !props.state.isCreate ? props.state.data.dates[0] : ""
                      }
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="update-profile-form-2"
                      className="form-label"
                    >
                      Company
                    </label>
                    <select className="form-select">
                      <option>Global Technologies</option>
                      <option>Delta InfoTech</option>
                    </select>
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="update-profile-form-2"
                      className="form-label"
                    >
                      Designation
                    </label>
                    <select className="form-select">
                      <option>Select Designation</option>
                      <option>Web Developer</option>
                      <option>Web Designer</option>
                      <option>Android Developer</option>
                      <option>Ios Developer</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-span-12 mt-8">
                <div className="overflow-x-auto">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th className="whitespace-nowrap">Module Permission</th>
                        <th className="whitespace-nowrap">Read</th>
                        <th className="whitespace-nowrap">Write</th>
                        <th className="whitespace-nowrap">Create</th>
                        <th className="whitespace-nowrap">Delete</th>
                        <th className="whitespace-nowrap">Import</th>
                        <th className="whitespace-nowrap">Export</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr key={1}>
                        <td>Holidays</td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr key={2}>
                        <td>Leaves</td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr key={3}>
                        <td>Clients</td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr key={4}>
                        <td>Projects</td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr key={5}>
                        <td>Tasks</td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr key={6}>
                        <td>Chats</td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr key={7}>
                        <td>Assets</td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                      <tr key={8}>
                        <td>Timing Sheets</td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input defaultChecked type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="intro-y col-span-12 flex items-center justify-center mt-5">
                <button
                  type="button"
                  className="btn btn-primary w-20 mt-3 mr-3"
                >
                  {props.state.isCreate ? "Submit" : "Save"}
                </button>
                <button type="button" className="btn btn-secondary w-20 mt-3" onClick={() => {
                  props.onShowModal({ show: false });
                }}>
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

export default EmployeeModal;
