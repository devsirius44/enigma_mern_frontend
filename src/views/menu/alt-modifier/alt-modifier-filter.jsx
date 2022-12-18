import React, { useState } from "react";

const AltModifierFilter = (props) => {
  const [modName, setModName] = useState();
  return (
    <>
      <div className="grid grid-cols-4 gap-6 mt-10">
        <input
          type="text"
          className="form-control"
          placeholder="Alt Modifier Name"
          onChange={(e) => {
            setModName(e.target.value);
          }}
        />

        <div className="hidden md:block mx-auto text-slate-500"></div>
        <div className="hidden md:block mx-auto text-slate-500"></div>

        <button
          className="btn btn-primary shadow-md mr-2"
          onClick={() => {
            const keywords = { name: modName };
            props.onFilter(keywords);
          }}
        >
          SEARCH
        </button>
      </div>
    </>
  );
};

export default AltModifierFilter;
