import React, { useState } from "react";
import { TomSelect } from "@/base-components";
import ColorPicker from "./colorpicker";
import StoveSelect from "../../../components/stove-select";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";

const ProductDetails = (props) => {
  const categories = props.categories;
  return (
    <div className="lg:w-1/2 sm:w-full intro-y box mr-auto ml-auto">
      <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5 p-5">
        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            required
          />
        </div>

        <StoveSelect
          id="menucatid"
          label="Menu Cat ID"
          type="text"
          options={categories && categories.map((cat) => cat.menu_name)}
          style="mt-3 col-span-12"
        />

        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Item Class
          </label>
          <TomSelect id="crud-form-2" className="w-full">
            {$_.take($f(), 5).map((faker, fakerKey) => (
              <option key={fakerKey} value={faker.itemClasses[fakerKey]}>
                {faker.itemClasses[fakerKey]}
              </option>
            ))}
          </TomSelect>
        </div>

        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Price
          </label>
          <div className="input-group">
            <div className="input-group-text">$</div>
            <input
              type="text"
              className="form-control"
              placeholder="Price"
              required
            />
          </div>
        </div>

        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Tax Rate
          </label>
          <div className="input-group">
            <div className="input-group-text">%</div>
            <input
              type="text"
              className="form-control"
              placeholder="Tax rate"
              required
            />
          </div>
        </div>

        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            Color
          </label>
          <div className="w-full h-100">
            <ColorPicker />
          </div>
        </div>

        <div className="intro-y col-span-12 sm:col-span-12">
          <label htmlFor="input-wizard-1" className="form-label">
            PrinterId
          </label>
          <TomSelect
            id="crud-form-2"
            className="w-full"
            placeholder="Select Printer Ids"
          >
            {$_.take($f(), 5).map((faker, fakerKey) => (
              <option key={fakerKey} value={faker.printerIds[fakerKey]}>
                {faker.printerIds[fakerKey]}
              </option>
            ))}
          </TomSelect>
        </div>

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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
