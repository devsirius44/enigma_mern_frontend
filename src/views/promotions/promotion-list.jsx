import React, { useState } from "react";
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

const PromotionList = (props) => {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const promotionData = props.data;

  return (
    <>
      <div className="mt-7">
        <table className="table table-report mt-2  ">
          <thead>
            <tr>
              <th className="whitespace-nowrap">NAME</th>
              <th className="whitespace-nowrap">CODE</th>
              <th className="whitespace-nowrap">TYPE</th>
              <th className="whitespace-nowrap">VALUE</th>
              <th className="whitespace-nowrap">BUTTON TEXT</th>
              <th className="whitespace-nowrap">RECEIPT TEXT</th>
              <th className="whitespace-nowrap">INCLUDE TAX</th>
              <th className="text-left whitespace-nowrap">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {promotionData.map((promo, index) => (
              <tr key={index} className="intro-x">
                <td>
                  <a
                    href="#"
                    className="font-medium whitespace-nowrap"
                    onClick={() => {
                      props.onShowModal({
                        show: true,
                        isCreate: false,
                        data: promo,
                      });
                    }}
                  >
                    {promo.promo_name}
                  </a>
                </td>
                <td className="">
                  <div className="font-medium whitespace-nowrap">
                    {promo.promo_code}
                  </div>
                </td>
                <td className="">
                  <div className="font-medium whitespace-nowrap">
                    {promo.promo_type}
                  </div>
                </td>
                <td className="">
                  <div className="font-medium whitespace-nowrap">
                    {parseFloat(promo.promo_value).toFixed(2)}
                  </div>
                </td>
                <td className="">
                  <div className="font-medium whitespace-nowrap">
                    {promo.buttonText}
                  </div>
                </td>
                <td className="">
                  <div className="font-medium whitespace-nowrap">
                    {promo.receiptText}
                  </div>
                </td>
                <td className="">
                  <div className="font-medium whitespace-nowrap">
                    {promo.includeTax}
                  </div>
                </td>

                <td className="text-left w-40">
                  <div className="flex">
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
                                data: promo,
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
                Do you really want to delete this promotion?
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

export default PromotionList;
