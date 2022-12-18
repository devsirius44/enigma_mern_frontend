import React, { useState } from "react";
import ProductHeader from "./product-header";
import ProductFilter from "./product-filter";
import ProductContentList from "./product-list";
import ProductModal from "./product-modal";
import { Modal, ModalBody } from "@/base-components";

const fakedata = {
  itemid: 330,
  item_name: "Half Grilled Cheese",
  menucatid: 2,
  item_price: "4.75",
  taxrate: "0.0775",
  item_mods: "",
  itemOptions_json: [
    {
      id: "330/327/1",
      sku: "330/327/1",
      name: "Change",
      options: [
        {
          id: "330/327/1/1",
          sku: "330/327/1/1",
          name: "No Cheese",
          price: 0,
          description: "",
          displayOrder: 1,
          priceCurrency: "USD",
        },
        {
          id: "330/327/1/2",
          sku: "330/327/1/2",
          name: "No Spinach",
          price: 0,
          description: "",
          displayOrder: 2,
          priceCurrency: "USD",
        },
        {
          id: "330/327/1/6",
          sku: "330/327/1/6",
          name: "Gluten Free Bread",
          price: 1.5,
          description: "",
          displayOrder: 6,
          priceCurrency: "USD",
        },
        {
          id: "330/327/1/7",
          sku: "330/327/1/7",
          name: "add Chicken",
          price: 1.5,
          description: "",
          displayOrder: 7,
          priceCurrency: "USD",
        },
      ],
      required: 0,
      optionType: 1,
      displayOrder: 1,
      eligibleQuantityMax: 0,
    },
  ],
  mod_prompt: 0,
  active: "1",
  printerid: "kitchen1",
  backgroundcolor: "#00adef",
  hungritemid: "20172",
  item_class: "",
  ingredients_json: null,
};

const StoveInput = (props) => {
  return (
    <div className={props.style}>
      <label htmlFor={props.id} className={"form-label"}>
        {props.label}
      </label>
      <input
        id={props.id}
        type={props.type}
        value={props.type === "text" ? props.value || "" : props.value || 0}
        className="form-control"
      ></input>
    </div>
  );
};

const StoveSelect = (props) => {
  return (
    <div className={props.style}>
      <label htmlFor={props.id} className={"form-label"}>
        {props.label}
      </label>
      <select
        id={props.id}
        type={props.type}
        defaultValue={props.value}
        className="form-control"
      >
        {props.options &&
          props.options.map((value, index) => (
            <option key={"key-" + index}>{value}</option>
          ))}
      </select>
    </div>
  );
};

const Option = (props) => {
  const [option, setOption] = useState(props.data);
  return (
    <div className="grid grid-cols-12 gap-x-5 mb-3 p-3 border-2 border-dashed">
      <StoveInput
        id="id"
        label="ID"
        type="text"
        value={option.id || ""}
        style="col-span-4"
      />

      <StoveInput
        id="sku"
        label="Sku"
        type="text"
        value={option.sku || ""}
        style="col-span-4"
      />

      <StoveInput
        id="name"
        label="Name"
        type="text"
        value={option.name || ""}
        style="col-span-4"
      />

      <StoveInput
        id="price"
        label="Price"
        type="text"
        value={option.price || ""}
        style="col-span-4 mt-3"
      />

      <StoveInput
        id="displayorder"
        label="Display Order"
        type="text"
        value={option.displayOrder || ""}
        style="col-span-4 mt-3"
      />

      <div className="col-span-4 mt-3">
        <label htmlFor="type" className="form-label">
          Price Currency
        </label>
        <select
          id="type"
          type="text"
          defaultValue={option.priceCurrency || ""}
          className="form-control"
        >
          <option>USD</option>
          <option>Pound</option>
          <option>Euro</option>
        </select>
      </div>

      <StoveInput
        id="description"
        label="Description"
        type="text"
        value={option.description || ""}
        style="col-span-12 mt-3"
      />
    </div>
  );
};

const ItemOption = (props) => {
  const [item, setItem] = useState(props.data);
  console.log(item);
  return (
    <>
      <div className="grid grid-cols-12 gap-x-5 box p-3">
        <StoveInput
          id="id"
          label="ID"
          type="text"
          value={item.id || ""}
          style="col-span-4"
        />

        <StoveInput
          id="sku"
          label="Sku"
          type="text"
          value={item.sku || ""}
          style="col-span-4 mb-3"
        />

        <StoveInput
          id="name"
          label="name"
          type="text"
          value={item.name || ""}
          style="col-span-4 mb-3"
        />

        <StoveSelect
          id="type"
          label="Option Type"
          type="text"
          options={["Multiple", "Single"]}
          value={item.optionType || ""}
          style="col-span-4 mb-3"
        />

        <StoveInput
          id="order"
          label="Display Order"
          type="text"
          value={item.optionType || ""}
          style="col-span-4 mb-3"
        />

        <StoveSelect
          id="quantitymax"
          label="Eligible Quantity Max"
          type="number"
          options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          value={item.eligibleQuantityMax}
          style="col-span-4 mb-3"
        />

        <div className="mt-3">
          <label htmlFor="enabled1" className="form-label">
            Required
          </label>
          <div className="form-check form-switch">
            <input
              id="enabled1"
              type="checkbox"
              className="form-check-input ml-3"
              checked={fakedata.required || false}
            />
          </div>
        </div>
      </div>
      <div className="box p-6">
        {item.options !== undefined &&
          item.options.map((value, index) => {
            return <Option data={value} key={"key-" + index} />;
          })}
      </div>
    </>
  );
};

const ProductEdit = () => {
  return (
    <>
      <div className="intro-y box lg:mt-5 w-2/3 mr-auto ml-auto">
        <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
          <h2 className="font-medium text-base mr-auto text-center">
            Edit Menu Item
          </h2>
        </div>
        <div className="p-5">
          <div className="flex flex-col-reverse xl:flex-row flex-col">
            <div className="flex-1 mt-6 xl:mt-0">
              <div className="grid grid-cols-12 gap-x-5 mb-3">
                <div className="col-span-12">
                  <StoveInput
                    id="itemid"
                    label="Item ID"
                    type="text"
                    value={fakedata.itemid || ""}
                    style="mt-3"
                  />

                  <StoveInput
                    id="name"
                    label="Name"
                    type="text"
                    value={fakedata.item_name || ""}
                    style="mt-3"
                  />

                  <StoveInput
                    id="price"
                    label="Price"
                    type="text"
                    value={fakedata.item_price || ""}
                    style="mt-3"
                  />

                  <StoveInput
                    id="taxrate"
                    label="Tax Rate"
                    type="text"
                    value={fakedata.taxrate || ""}
                    style="mt-3"
                  />

                  <StoveInput
                    id="mods"
                    label="Mods"
                    type="text"
                    value={fakedata.item_mods || ""}
                    style="mt-3"
                  />

                  <StoveInput
                    id="menucatid"
                    label="Menu Cat ID"
                    type="text"
                    value={fakedata.menucatid || ""}
                    style="mt-3"
                  />

                  <StoveInput
                    id="menuprompt"
                    label="Menu Prompt"
                    type="number"
                    value={fakedata.mod_prompt || ""}
                    style="mt-3"
                  />

                  <StoveInput
                    id="printerid"
                    label="Printer ID"
                    type="text"
                    value={fakedata.printerid || ""}
                    style="mt-3"
                  />

                  <StoveInput
                    id="hungritemid"
                    label="Hungr Item ID"
                    type="text"
                    value={fakedata.hungritemid || ""}
                    style="mt-3"
                  />

                  <StoveInput
                    id="class"
                    label="Class"
                    type="text"
                    value={fakedata.item_class || ""}
                    style="mt-3"
                  />

                  <div className="mt-3">
                    <label htmlFor="enabled1" className="form-label">
                      Approved
                    </label>
                    <div className="form-check form-switch">
                      <input
                        id="enabled1"
                        type="checkbox"
                        className="form-check-input ml-3"
                        checked={fakedata.active || false}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <label className="col-span-12 text-lg">Item Options</label>

              <div className="col-span-12  mt-3 border-2 border-dashed">
                {fakedata.itemOptions_json.map((value, index) => {
                  console.log(value);
                  return (
                    <ItemOption data={value} key={"key-" + index}></ItemOption>
                  );
                })}
              </div>

              <div className="intro-y col-span-12 flex items-center justify-center mt-5">
                <button
                  type="button"
                  className="btn btn-primary w-20 mt-3 mr-3"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary w-20 mt-3"
                  onClick={() => {
                    navigateTo("/menu/products");
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductEdit;
