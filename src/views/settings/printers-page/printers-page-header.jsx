import React from "react";
import { Lucide } from "@/base-components";

const PrintersPageHeader = (props) => {
  const showModal = () => {
    props.onShowModal({
      show: true,
      isCreate: true,
    });
  };

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">All Printers</h2>
      <div className="gap-6 mt-5 text-right">
        <button className="btn btn-warning w-40" onClick={showModal}>
          <Lucide icon="PlusCircle" className="w-5 h-5 mr-2" /> Add Printer
        </button>
      </div>
    </>
  );
};

export default PrintersPageHeader;
