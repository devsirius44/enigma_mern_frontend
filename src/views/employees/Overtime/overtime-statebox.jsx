import React from "react";
import { Lucide } from "@/base-components";

const OvertimeStatebox = (props) => {
  const showModal = () => {
    props.onShowModal({ show: true, isCreate: true });
  };

  return (
    <>
      <div className="intro-y grid grid-cols-12 gap-6 mt-5">
        <div className="box form-control col-span-3 text-center pt-10 pb-10">
          <h1 className="font-medium text-lg">Overtime Employee</h1>
          <span className="font-extrabold text-xl">12 </span>
          <span className="text-sm">this month</span>
        </div>
        <div className="box form-control col-span-3">
          <div className="box form-control col-span-3 text-center pt-10 pb-10">
            <h1 className="font-medium text-lg">Overtime Hours</h1>
            <span className="font-extrabold text-xl">118 </span>
            <span className="text-sm">this month</span>
          </div>
        </div>
        <div className="box form-control col-span-3">
          <div className="box form-control col-span-3 text-center pt-10 pb-10">
            <h1 className="font-medium text-lg">Pending Request</h1>
            <span className="font-extrabold text-xl">23 </span>
          </div>
        </div>
        <div className="box form-control col-span-3">
          <div className="box form-control col-span-3 text-center pt-10 pb-10">
            <h1 className="font-medium text-lg">Rejected</h1>
            <span className="font-extrabold text-xl">5 </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OvertimeStatebox;
