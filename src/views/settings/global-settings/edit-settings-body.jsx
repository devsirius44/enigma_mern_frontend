import React, { useState, useEffect } from "react";
import { TabPanel } from "@/base-components";
import Images from "./images";

const EditSettingsBody = (props) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
          <table className="table table-report -mt-2">
            {/* Venue */}
            <TabPanel className="w-full p-3 leading-relaxed intro-x">
              <div className="">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Venue name
                </label>
                <input
                  id="update-profile-form-2"
                  type="text"
                  className="form-control"
                  value={" " ? "Nektar Juice Bar" : ""}
                  onChange={() => {}}
                />
              </div>
            </TabPanel>
            <TabPanel className="w-full p-3 leading-relaxed intro-x">
              <div className="">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Employee code length
                </label>
                <input
                  type="number"
                  className="form-control"
                  defaultValue={2}
                  min={1}
                  max={8}
                />
              </div>
            </TabPanel>

            {/* printers */}
            <TabPanel className="w-full p-3 leading-relaxed intro-x">
              <div className=" ">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Delivery default printer
                </label>
                <select className="form-select box">
                  <option>Select Printer</option>
                  <option>Printer 1</option>
                  <option>Printer 2</option>
                  <option>Printer 3</option>
                  <option>Printer 4</option>
                </select>
              </div>
            </TabPanel>

            <TabPanel className="w-full p-3 leading-relaxed intro-x">
              <div className="">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Qty Customer Payment Receipt
                </label>
                <input
                  id="update-profile-form-2"
                  type="text"
                  className="form-control"
                  value={" " ? "1" : ""}
                  onChange={() => {}}
                />
              </div>
            </TabPanel>

            <TabPanel className="w-full p-3 leading-relaxed intro-x">
              <div className="">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Time zone name
                </label>
                <select className="form-select box">
                  <option>Select Time Zone</option>
                  <option>America/Los_Angeles</option>
                  <option>America/Buston</option>
                  <option>America/Los_Angeles</option>
                  <option>America/Los_Angeles</option>
                </select>
              </div>
            </TabPanel>

            <TabPanel className="w-full p-3 leading-relaxed intro-x">
              <div className="">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Venue auth code
                </label>
                <input
                  id="update-profile-form-2"
                  type="text"
                  className="form-control"
                  value={" " ? "3333333" : ""}
                  onChange={() => {}}
                />
              </div>
            </TabPanel>

            <TabPanel className="w-full p-3 leading-relaxed intro-x">
              <div className="">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Survey Text
                </label>
                <input
                  id="update-profile-form-2"
                  type="text"
                  className="form-control"
                  value={" " ? "FF-000012" : ""}
                  onChange={() => {}}
                />
              </div>
            </TabPanel>
            <TabPanel className="w-full p-3 leading-relaxed intro-x">
              <div className="">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Customer Cart View Image
                </label>

                <Images />
              </div>
            </TabPanel>

            <div className="col-span-12 mt-8 intro-x">
              <div className="overflow-x-auto">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap">Module Permission</th>
                      <th className="whitespace-nowrap">Enable</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={1}>
                      <td>Show Table Map Dine In</td>
                      <td className="">
                        <input defaultChecked type="checkbox" />
                      </td>
                    </tr>
                    <tr key={2}>
                      <td>Use Seat Map</td>
                      <td className="">
                        <input defaultChecked type="checkbox" />
                      </td>
                    </tr>
                    <tr key={3}>
                      <td>Allow EXPO to refire</td>
                      <td className="">
                        <input defaultChecked type="checkbox" />
                      </td>
                    </tr>
                    <tr key={4}>
                      <td>Invert Option Text</td>
                      <td className="">
                        <input defaultChecked type="checkbox" />
                      </td>
                    </tr>
                    <tr key={5}>
                      <td>Prompt for tip</td>
                      <td className="">
                        <input defaultChecked type="checkbox" />
                      </td>
                    </tr>
                    <tr key={6}>
                      <td>Print Receipt on Approval</td>
                      <td className="">
                        <input defaultChecked type="checkbox" />
                      </td>
                    </tr>
                    <tr key={7}>
                      <td>Show Third Party in Reports</td>
                      <td className="">
                        <input defaultChecked type="checkbox" />
                      </td>
                    </tr>
                    <tr key={8}>
                      <td>Allow Customer Modifier Option</td>
                      <td className="">
                        <input defaultChecked type="checkbox" />
                      </td>
                    </tr>
                    <tr key={9}>
                      <td>Show Item Prices Customer Display</td>
                      <td className="">
                        <input defaultChecked type="checkbox" />
                      </td>
                    </tr>
                    <tr key={10}>
                      <td>Lock orders to user</td>
                      <td className="">
                        <input defaultChecked type="checkbox" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </table>
        </div>
      </div>
    </>
  );
};

export default EditSettingsBody;
