import React, { useState, useEffect } from "react";
import IngredientsModal from "./ingredients-modal";
import Select from "react-select";
import { Lucide } from "@/base-components";
import { TomSelect, Modal, ModalBody } from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";

const Ingredients = (props) => {
  const [ingredientIndex, setIngredientIndex] = useState(0);
  let [ingredients, setIngredients] = useState($f()[0].ingredients);
  const [amount, setAmount] = useState(0);
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState({
    show: false,
    ingredient: null,
  });
  const [ingredientList, setIngredientList] = useState([]);

  const onChangeIngredient = (e) => {
    const index = ingredients.findIndex((obj) => obj.name === e.value);
    setIngredientIndex(index);
  };

  const deleteIngredient = (ingredient) => {
    const index = ingredientList.indexOf(ingredient);
    ingredientList.splice(index, 1);
    setIngredientList(ingredientList);
  };

  const addIngredient = (ingredient) => {
    if (amount <= 0) return;
    ingredient.amount = amount;
    const updatedList = [...ingredientList, ingredient];
    setIngredientList(updatedList);
    setIngredientIndex(0);
    ingredients = ingredients.filter((item) => item.name !== ingredient.name);
    setIngredients(ingredients);
  };

  return (
    <>
      <div className="w-full grid grid-cols-12 gap-4 gap-y-5 p-5 ">
        <div className="col-span-12 z-20">
          <table className="table table-report -mt-2">
            <thead>
              <tr>
                <th className="whitespace-nowrap w-50">NAME</th>
                <th className="whitespace-nowrap">AMOUNT</th>
                <th className="text-left whitespace-nowrap">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="intro-x">
                <td className="max-w-xs min-w-xs">
                  <Select
                    onChange={(e) => onChangeIngredient(e)}
                    options={ingredients.map((ingredient, idx) => ({
                      label: ingredient.name,
                      value: ingredient.name,
                      selected: idx === ingredientIndex,
                    }))}
                  ></Select>
                </td>
                <td className="">
                  <input
                    id="input-wizard-1"
                    type="text"
                    className="form-control"
                    defaultValue={amount}
                    onInput={(e) => setAmount(e.target.value)}
                    required
                  />
                </td>

                <td className="text-left w-40">
                  <div className="flex">
                    <button
                      className="flex items-center text-primary"
                      onClick={() => {
                        addIngredient(ingredients[ingredientIndex]);
                      }}
                    >
                      <Lucide icon="Plus" className="w-4 h-4 mr-1" /> Add
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {ingredientList.length ? (
          <div className="col-span-12 z-10">
            <table className="table table-report -mt-2">
              <thead>
                <tr>
                  <th className="whitespace-nowrap">NAME</th>
                  <th className="whitespace-nowrap">AMOUNT</th>
                  <th className="whitespace-nowrap">UNIT</th>
                  <th className="text-left whitespace-nowrap">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {$_.take(ingredientList, ingredientList.length).map(
                  (ingredient, index) => (
                    <tr key={index} className="intro-x">
                      <td>
                        <a href="" className="font-medium whitespace-nowrap">
                          {ingredient.name}
                        </a>
                      </td>
                      <td className="">
                        <div className="font-medium whitespace-nowrap">
                          {ingredient.amount}
                        </div>
                      </td>
                      <td className="">
                        <div className="font-medium whitespace-nowrap">
                          {ingredient.unit}
                        </div>
                      </td>
                      <td className="text-left w-40">
                        <div className="flex">
                          <button
                            className="flex items-center text-danger"
                            onClick={() =>
                              setDeleteConfirmationModal({
                                show: true,
                                ingredient: ingredient,
                              })
                            }
                          >
                            <Lucide icon="Trash" className="w-4 h-4 mr-1" />{" "}
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center col-span-12 z-10">
            <h2>No ingredients added.</h2>
          </div>
        )}

        {/* BEGIN: Delete Confirmation Modal -*/}
        <Modal
          show={deleteConfirmationModal.show}
          onHidden={() => {
            setDeleteConfirmationModal({ show: false });
          }}
        >
          <ModalBody className="p-0">
            <div className="p-5 text-center">
              <Lucide
                icon="XCircle"
                className="w-16 h-16 text-danger mx-auto mt-3"
              />
              <div className="text-3xl mt-5">Are you sure?</div>
              <div className="text-slate-500 mt-2">
                Do you really want to delete this Category?
              </div>
            </div>
            <div className="px-5 pb-8 text-center">
              <button
                type="button"
                onClick={() => {
                  setDeleteConfirmationModal(false);
                }}
                className="btn btn-outline-secondary w-24 mr-1"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger w-24"
                onClick={() => {
                  setDeleteConfirmationModal(false);
                  deleteIngredient(deleteConfirmationModal.ingredient);
                }}
              >
                Delete
              </button>
            </div>
          </ModalBody>
        </Modal>
        {/* END: Delete Confirmation Modal -*/}
      </div>
    </>
  );
};

export default Ingredients;
