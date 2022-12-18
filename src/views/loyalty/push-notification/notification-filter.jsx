import React from "react";

const NotificationFilter = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-6 mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Customer Name"
        />

        <input type="text" className="form-control" placeholder="Customer ID" />

        <button className="mr-2 shadow-md btn btn-primary">SEARCH</button>
      </div>
    </>
  );
};

export default NotificationFilter;
