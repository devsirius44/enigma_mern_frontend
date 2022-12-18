import React from "react";
import { Litepicker } from "@/base-components";

const ReservationFilter = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-6 mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Reservation ID"
        />

        <input
          type="text"
          className="form-control"
          placeholder="Customer Name"
        />

        <Litepicker
          className="form-control"
          placeholder="Date"
        />

        <button className="btn btn-primary shadow-md mr-2">SEARCH</button>
      </div>
    </>
  );
};

export default ReservationFilter;
