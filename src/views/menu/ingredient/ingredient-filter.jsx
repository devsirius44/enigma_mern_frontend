import React from "react";

const IngredientFilter = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-6 mt-10">
        <input
          type="text"
          className="form-control"
          placeholder="Ingredient Name"
        />

        <div className="hidden md:block mx-auto text-slate-500"></div>
        <div className="hidden md:block mx-auto text-slate-500"></div>

        <button className="btn btn-primary shadow-md mr-2">SEARCH</button>
      </div>
    </>
  );
};

export default IngredientFilter;
