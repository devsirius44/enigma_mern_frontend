import React from "react";
import { Lucide } from "@/base-components";
const SettingsHeader = (props) => {
  return (
    <>
      <div className="flex flex-wrap items-center col-span-12 mt-10 intro-y sm:flex-nowrap">
        <h2 className="text-lg font-medium intro-y">Global Settings</h2>
        <div className="hidden mx-auto md:block text-slate-500"></div>
        <div className="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
          <button className="w-40 btn btn-warning">
            <Lucide icon="Save" className="w-5 h-5 mr-2" /> Save
          </button>
        </div>
      </div>
    </>
  );
};

export default SettingsHeader;
