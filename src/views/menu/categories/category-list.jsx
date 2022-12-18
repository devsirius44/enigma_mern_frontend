import React, { useState, useEffect } from "react";
import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Tippy,
} from "@/base-components";
import { Modal, ModalBody } from "@/base-components";

const imageAssets = import.meta.globEager(
  `/src/assets/images/*.{jpg,jpeg,png,svg}`
);

const CategoryList = (props) => {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const [menuCategories, setMenuCategories] = useState(props.data);

  useEffect(() => {
    setMenuCategories(props.data);
  }, [props.data]);

  return (
    <>
      <div className="mt-10">
        <table className="table table-report -mt-2">
          <thead>
            <tr>
              <th className="whitespace-nowrap">IMAGE</th>
              <th className="whitespace-nowrap">CATEGORY NAME</th>
              <th className="text-center whitespace-nowrap">STATUS</th>
              <th className="text-center whitespace-nowrap">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {menuCategories &&
              menuCategories.map((category, index) => (
                <tr key={index} className="intro-x">
                  <td className="w-40">
                    <div className="flex">
                      <div className="w-10 h-10 image-fit zoom-in">
                        <Tippy
                          tag="img"
                          alt="Midone Tailwind HTML Admin Template"
                          className="rounded-full"
                          src={
                            imageAssets[
                              "/src/assets/images/food-beverage-3.jpg"
                            ].default
                          }
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <a
                      href="#"
                      className="font-medium whitespace-nowrap"
                      onClick={() => {
                        props.onShowModal({
                          show: true,
                          isCreate: false,
                          data: category,
                        });
                      }}
                    >
                      {category.menu_name}
                    </a>
                  </td>
                  <td className="w-40">
                    <div className="justify-center form-check form-switch">
                      <input
                        id="product-status-active"
                        className="form-check-input"
                        type="checkbox"
                        checked={true}
                      />
                    </div>
                  </td>

                  <td className="text-left w-40">
                    <div className="flex justify-center items-center">
                      <Dropdown className="">
                        <DropdownToggle
                          tag="a"
                          className="w-5 h-5 block"
                          href="#"
                        >
                          <Lucide
                            icon="MoreVertical"
                            className="w-5 h-5 text-slate-500"
                          />
                        </DropdownToggle>
                        <DropdownMenu className="w-40">
                          <DropdownContent>
                            <DropdownItem
                              onClick={() => {
                                props.onShowModal({
                                  show: true,
                                  isCreate: false,
                                  data: category,
                                });
                              }}
                            >
                              <Lucide icon="Edit2" className="w-4 h-4 mr-2" />{" "}
                              Edit
                              {/* </a> */}
                            </DropdownItem>
                            <DropdownItem
                              className="text-danger"
                              onClick={() => {
                                setDeleteConfirmationModal(true);
                              }}
                            >
                              <Lucide icon="Trash2" className="w-4 h-4 mr-2" />{" "}
                              Delete
                            </DropdownItem>
                          </DropdownContent>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* BEGIN: Delete Confirmation Modal -*/}
        <Modal
          show={deleteConfirmationModal}
          onHidden={() => {
            setDeleteConfirmationModal(false);
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
              <button type="button" className="btn btn-danger w-24">
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

export default CategoryList;
