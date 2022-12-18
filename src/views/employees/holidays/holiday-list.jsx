import React, { useState } from "react";
import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
} from "@/base-components";
import { Modal, ModalBody } from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";

const HolidayList = (props) => {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);

  return (
    <>
      <div className="box mt-10">
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="whitespace-nowrap">#</th>
              <th className="whitespace-nowrap">Title</th>
              <th className="whitespace-nowrap">Holiday Date</th>
              <th className="whitespace-nowrap">Day</th>
              <th className="whitespace-nowrap text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {$_.take($f(), 7).map((faker, fakerKey) => (
              <tr key={fakerKey} className="intro-x">
                <td className="text-left">{fakerKey + 1}</td>
                <td className="text-left">
                  {faker.holidays[fakerKey].holidayName}
                </td>
                <td className="text-left">
                  {faker.holidays[fakerKey].holidayDate}
                </td>
                <td className="text-left">
                  {faker.holidays[fakerKey].holidayDay}
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
                                data: faker.holidays[fakerKey],
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
                Do you really want to delete this holiday?
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

export default HolidayList;
