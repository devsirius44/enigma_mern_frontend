import React, { useEffect, useState } from "react";
import StoveSelect from "../../../components/stove-select";

const ProductFilter = (props) => {
  const [itemId, setItemId] = useState("");
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("All");
  const [catOptions, setCatOptions] = useState(["All"]);

  useEffect(() => {
    if (props.categories === undefined) return;
    let options = ["All"];
    options = options.concat(props.categories.map((cat) => cat.menu_name));
    setCatOptions(options);
  }, [props.categories]);
  return (
    <>
      <div className="grid grid-cols-4 gap-6 mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Menu Item ID"
          onChange={(e) => {
            setItemId(e.target.value);
          }}
        />

        <input
          type="text"
          className="form-control"
          placeholder="Menu Item Name"
          onChange={(e) => {
            setItemName(e.target.value);
          }}
        />

        <StoveSelect
          id="menucatid"
          type="text"
          options={catOptions}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />

        <button
          className="btn btn-primary shadow-md mr-2"
          onClick={() => {
            props.onFilter({
              itemid: itemId,
              itemname: itemName,
              category: category,
            });
          }}
        >
          SEARCH
        </button>
      </div>
    </>
  );
};

export default ProductFilter;
