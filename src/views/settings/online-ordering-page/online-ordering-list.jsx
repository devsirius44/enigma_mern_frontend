import React, { useState, useEffect } from "react";
import { TabPanel } from "@/base-components";
import Multiselect from "react-widgets/Multiselect";

import Images from "./images";

const OnlineOrderingContentList = () => {
  const venueOption = [
    "Breakfast Grill",
    "Breakfast Grill East Valley",
    "Breakfast Grill  Main St",
    "Breakfast Grill San Fran",
    "Breakfast Grill Red Woods",
    "Breakfast Grill Napa",
  ];
  function filter(item, value) {
    return item.toLowerCase().includes(value.toLowerCase());
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
          <table className="table table-report -mt-2">
            {/*Restaurant name */}
            <TabPanel className="w-full p-3 leading-relaxed intro-x">
              <div className="">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Restaurant name
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
                  Location Name
                </label>
                <Multiselect
                  data={venueOption}
                  filter={filter}
                  value={
                    true
                      ? []
                      : ["Breakfast Grill San Fran", "Breakfast Grill Napa"]
                  }
                />
              </div>
            </TabPanel>
            {/*Location Code */}
            <TabPanel className="w-full p-3 leading-relaxed intro-x">
              <div className="">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Location Code
                </label>
                <input
                  id="update-profile-form-2"
                  type="text"
                  className="form-control"
                  value={" " ? "FF-12345" : ""}
                  onChange={() => {}}
                />
              </div>
            </TabPanel>
            {/* Restaurant Logo */}

            <TabPanel className="w-full p-3 leading-relaxed intro-x">
              <div className="">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Restaurant Logo
                </label>

                <Images />
              </div>
            </TabPanel>
            <TabPanel className="w-full p-3 leading-relaxed intro-x">
              <div className="">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Banner Image
                </label>

                <Images />
              </div>
            </TabPanel>
            <TabPanel className="w-full p-3 leading-relaxed intro-x">
              <div className="">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Background Image
                </label>

                <Images />
              </div>
            </TabPanel>
            {/*Restaurant Description */}
            <TabPanel className="w-full p-3 leading-relaxed intro-x">
              <div className="">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Restaurant Description
                </label>
                <textarea
                  id="update-profile-form-2"
                  type="text"
                  className="form-control"
                  value={" " ? "Nektar Juice Bar" : ""}
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

export default OnlineOrderingContentList;
