import React, { useState } from "react";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";

const IngredientsModal = (props) => {
  const [ingredients, setIngredients] = useState([]);
  const onChange = (e, ingredient) => {
    if (e.target.checked) {
      const updatedList = [...ingredients, ingredient];
      setIngredients(updatedList);
    }
  };
  return (
    <>
      <div className="grid grid-cols-12 gap-4 gap-y-5 p-5 box">
        <div className="col-span-12">
          <table className="table table-report -mt-2">
            <thead>
              <tr>
                <th className="whitespace-nowrap">#</th>
                <th className="whitespace-nowrap">NAME</th>
                <th className="whitespace-nowrap">UNIT</th>
                <th className="whitespace-nowrap">PRICE</th>
              </tr>
            </thead>
            <tbody>
              {$_.take($f(), 5).map((faker, fakerKey) => (
                <tr key={fakerKey} className="intro-x">
                  <td>
                    <input
                      id="checked-checkbox1"
                      type="checkbox"
                      onChange={(e) => {
                        onChange(e, faker.ingredients[fakerKey]);
                      }}
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </td>
                  <td>
                    <a href="" className="font-medium whitespace-nowrap">
                      {faker.ingredients[fakerKey].name}
                    </a>
                  </td>
                  <td className="">
                    <div className="font-medium whitespace-nowrap">
                      {faker.ingredients[fakerKey].unit}
                    </div>
                  </td>
                  <td className="">
                    <div className="font-medium whitespace-nowrap">
                      {faker.ingredients[fakerKey].price}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="px-5 mt-5 mb-5 text-center">
        <button
          className="btn btn-primary w-24 ml-2"
          onClick={() => {
            props.onShowModal({ show: false, ingredients: ingredients });
          }}
        >
          Add
        </button>
        <button
          className="btn btn-secondary w-24 ml-2"
          onClick={() => {
            props.onShowModal({ show: false });
          }}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default IngredientsModal;
