import React, { useState } from "react";

const ShiftHeader = (props) => {
  const showShiftModal = () => {
    props.onShowModal({ show: true, isCreate: true, modalName: "shift" });
  };
  return (
    <>
      <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-10">
        <h2 className="intro-y text-lg font-medium">Shift List</h2>
        <div className="hidden md:block mx-auto text-slate-500"></div>
        <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
          <button className="btn btn-warning w-40" onClick={showShiftModal}>
            Add Shifts
          </button>
        </div>
      </div>
    </>
  );
};

export default ShiftHeader;
