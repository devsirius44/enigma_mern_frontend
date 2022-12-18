import React, { useState } from "react";

const ProviderFilter = (props) => {
  const [providerName, setProviderName] = useState();
  return (
    <>
      <div className="grid grid-cols-4 gap-6 mt-10">
        <input
          type="text"
          className="form-control"
          placeholder="Provider Name"
          onChange={(e) => {
            setProviderName(e.target.value);
          }}
        />
        
        <div className="hidden md:block mx-auto text-slate-500"></div>
        <div className="hidden md:block mx-auto text-slate-500"></div>

        <button
          className="btn btn-primary shadow-md mr-2"
          onClick={() => {
            const keywords = { name: providerName };
            props.onFilter(keywords);
          }}
        >
          SEARCH
        </button>
      </div>
    </>
  );
};

export default ProviderFilter;
