import React, { useState, useEffect } from "react";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@/base-components";

const EditSettingsBody = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
          <table className="table table-report -mt-2">
            <TabPanel className="w-full p-5 leading-relaxed ">
              <div className="mt-6 intro-x">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Receipt Logo Url
                </label>
                <input
                  id="update-profile-form-2"
                  type="text"
                  className="form-control"
                  value={" " ? "FF-000012" : ""}
                  onChange={() => {}}
                />
              </div>

              <div className="mt-3 intro-x">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Mobile Check out Url
                </label>
                <input
                  id="update-profile-form-2"
                  type="text"
                  className="form-control"
                  value={" " ? "www.com" : ""}
                  onChange={() => {}}
                />
              </div>

              <div className="mt-3 intro-x">
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

              <div className="mt-6 intro-x">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Header Line 1
                </label>
                <input
                  id="update-profile-form-2"
                  type="text"
                  className="form-control"
                  value={" " ? "FF-000012" : ""}
                  onChange={() => {}}
                />
              </div>
              <div className="mt-6 intro-x">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Header Line 2
                </label>
                <input
                  id="update-profile-form-2"
                  type="text"
                  className="form-control"
                  value={" " ? "FF-000012" : ""}
                  onChange={() => {}}
                />
              </div>
              <div className="mt-6 intro-x">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Header Line 3
                </label>
                <input
                  id="update-profile-form-2"
                  type="text"
                  className="form-control"
                  value={" " ? "FF-000012" : ""}
                  onChange={() => {}}
                />
              </div>
              <div className="mt-6 intro-x">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Footer Line 1
                </label>
                <input
                  id="update-profile-form-2"
                  type="text"
                  className="form-control"
                  value={" " ? "FF-000012" : ""}
                  onChange={() => {}}
                />
              </div>
              <div className="mt-6 intro-x">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Footer Line 2
                </label>
                <input
                  id="update-profile-form-2"
                  type="text"
                  className="form-control"
                  value={" " ? "FF-000012" : ""}
                  onChange={() => {}}
                />
              </div>
              <div className="mt-6 intro-x">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Footer Line 3
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
          </table>
        </div>
      </div>
    </>
  );
};

export default EditSettingsBody;
