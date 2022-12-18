import React, { useState } from "react";

const PromotionFilter = (props) => {
  const [promotionName, setPromotionName] = useState();
  return (
    <>
      <div className="grid grid-cols-4 gap-6 mt-10">
        <input
          type="text"
          className="form-control"
          placeholder="Promotion Name"
          onChange={(e) => {
            setPromotionName(e.target.value);
          }}
        />

        <select className="form-select box">
          <option>Select UserType</option>
          <option>Casher</option>
          <option>Manager</option>
          <option>Admin</option>
        </select>

        <select className="form-select box">
          <option>Select Approval by</option>
          <option>Casher</option>
          <option>Manager</option>
          <option>Admin</option>
        </select>

        <button
          className="btn btn-primary shadow-md mr-2"
          onClick={() => {
            const keywords = { name: promotionName };
            props.onFilter(keywords);
          }}
        >
          SEARCH
        </button>
      </div>
    </>
  );
};

export default PromotionFilter;
