import React from "react";

const CustomerFilter = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-6 mt-5">
        <input type="text" className="form-control" placeholder="Customer ID" />

        <input
          type="text"
          className="form-control"
          placeholder="Customer Name"
        />

        <button className="btn btn-primary shadow-md mr-2">SEARCH</button>
      </div>
    </>
  );
};

export default CustomerFilter;
