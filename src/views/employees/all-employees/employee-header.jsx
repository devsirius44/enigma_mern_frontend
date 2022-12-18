import React from "react";
import { Lucide } from "@/base-components";

const EmployeeHeader = (props) => {
  const setListView = () => {
    props.onSelectView(true);
  };
  const setGridView = () => {
    props.onSelectView(false);
  };
  const showModal = () => {
    props.onShowModal({
      show: true,
      isCreate: true,
    });
  };

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">All Employees</h2>
      <div className="gap-6 mt-5 text-right">
        <button className="btn btn-warning w-40" onClick={showModal}>
          <Lucide icon="PlusCircle" className="w-5 h-5 mr-2" /> Add Employee
        </button>
      </div>
    </>
  );
};

export default EmployeeHeader;
