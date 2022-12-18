import React from "react";
import { Lucide } from "@/base-components";

const ReservationHeader = (props) => {
  const setListView = () => {
    props.onSelectView(true);
  };
  const setCalendarView = () => {
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
      <h2 className="intro-y text-lg font-medium mt-10">All Reservations</h2>
      <div className="gap-6 mt-5 text-right">
        <button className="btn btn-secondary mr-1 mb-2" onClick={setListView}>
          <Lucide icon="List" className="w-5 h-5" />
        </button>
        <button
          className="btn btn-secondary mr-1 mb-2"
          onClick={setCalendarView}
        >
          <Lucide icon="Calendar" className="w-5 h-5" />
        </button>
        <button className="btn btn-warning w-40" onClick={showModal}>
          <Lucide icon="PlusCircle" className="w-5 h-5 mr-2" /> Add Reservation
        </button>
      </div>
    </>
  );
};

export default ReservationHeader;
