import React, { useEffect, useState } from "react";
import StoveInput from "../../../components/stove-input";
import StoveSelect from "../../../components/stove-select";
import StoveColorPicker from "../../../components/stove-color-picker";

const ProductDetails = (props) => {
  const [data, setData] = useState(props.data);
  const [categories, setCategories] = useState(props.categories);

  useEffect(() => {
    if (props.data === undefined || props.categories === undefined) return;
    setData(props.data);
    setCategories(props.categories);
  }, [props.data, props.categories]);

  return (
    <div className="lg:w-1/2 sm:w-full intro-y box mr-auto ml-auto">
      <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5 p-5">
        <StoveInput
          id="name"
          label="Name"
          type="text"
          value={data.item_name || ""}
          style="col-span-12"
        />

        <StoveSelect
          id="menucatid"
          label="Menu Category"
          type="text"
          options={categories && categories.map((cat) => cat.menu_name)}
          value={categories && categories[data.menucatid].menu_name}
          style="mt-3 col-span-12"
        />

        <StoveInput
          id="class"
          label="Item Class"
          type="text"
          value={data.item_class || ""}
          style="col-span-12"
        />

        <StoveInput
          id="price"
          label="Item Price"
          type="text"
          value={data.item_price || ""}
          style="col-span-12"
        />

        <StoveInput
          id="taxrate"
          label="Tax Rate"
          type="text"
          value={data.taxrate || ""}
          style="col-span-12"
        />

        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Background Color
          </label>
          <div className="w-full h-100">
            <StoveColorPicker value={data.backgroundcolor} />
          </div>
        </div>

        <StoveInput
          id="printerId"
          label="Printer ID"
          type="text"
          value={data.printerid || ""}
          style="col-span-12"
        />
        <StoveInput
          id="menuprompt"
          label="Menu Prompt"
          type="number"
          value={data.mod_prompt || ""}
          style="col-span-12"
        />
        <StoveInput
          id="hungritemid"
          label="Hungr Item ID"
          type="number"
          value={data.hungritemid || ""}
          style="col-span-12"
        />

        <div className="intro-y col-span-6 sm:col-span-6">
          <label htmlFor="input-wizard-1" className="form-label">
            Active State
          </label>
          <div className="w-full mt-3 xl:mt-0 flex-1">
            <div className="form-check form-switch">
              <input
                id="product-status-active"
                className="form-check-input"
                type="checkbox"
                checked={data.active === "1" ? true : false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
