import React from "react";
import { Lucide } from "@/base-components";
const AddProductHeader = (props) => {
  return (
    <>
      <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-10">
        <h2 className="intro-y text-lg font-medium">Add Menu Item</h2>
        <div className="hidden md:block mx-auto text-slate-500"></div>
        <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
          <button className="btn btn-warning w-40">
            <Lucide icon="Save" className="w-5 h-5 mr-2" /> Save
          </button>
        </div>
      </div>
    </>
  );
};

export default AddProductHeader;
