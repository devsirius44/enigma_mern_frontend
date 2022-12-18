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

const CampaignContent = (props) => {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);

  return (
    <>
      <div className="mt-10">
        <table className="table -mt-2 table-report">
          <thead>
            <tr>
              <th className="whitespace-nowrap">Loyalty Code</th>
              <th className="text-center whitespace-nowrap">
                Day & time bouns
              </th>
              <th className="text-center whitespace-nowrap">
                Dining option bonus
              </th>
              <th className="text-center whitespace-nowrap">Signup bonus</th>
              <th className="text-center whitespace-nowrap">Birthday treat</th>
              <th className="text-center whitespace-nowrap">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {$_.take($f(), 4).map((faker, fakerKey) => (
              <tr key={fakerKey} className="intro-x">
                <td>
                  <a
                    href="#"
                    className="font-medium whitespace-nowrap"
                    onClick={() => {
                      props.onShowModal({
                        show: true,
                        isCreate: false,
                        data: faker.menuCategories[fakerKey],
                      });
                    }}
                  >
                    {faker.users[0].name}
                  </a>
                </td>
                <td className="w-40 text-center">1 Point</td>
                <td className="w-40 text-center">2.5 Points</td>
                <td className="w-40 text-center">1 Point</td>
                <td className="w-40 text-center">5 Points</td>

                <td className="text-left w-30">
                  <div className="flex items-center justify-center">
                    <Dropdown className="">
                      <DropdownToggle
                        tag="a"
                        className="block w-5 h-5"
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
                                data: faker.menuCategories[fakerKey],
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
                className="w-16 h-16 mx-auto mt-3 text-danger"
              />
              <div className="mt-5 text-3xl">Are you sure?</div>
              <div className="mt-2 text-slate-500">
                Do you really want to delete this Campaign?
              </div>
            </div>
            <div className="px-5 pb-8 text-center">
              <button
                type="button"
                onClick={() => {
                  setDeleteConfirmationModal(false);
                }}
                className="w-24 mr-1 btn btn-outline-secondary"
              >
                Cancel
              </button>
              <button type="button" className="w-24 btn btn-danger">
                Delete
              </button>
            </div>
          </ModalBody>
        </Modal>
        {/* END: Delete Confirmation Modal -*/}

        {/* BEGIN: Pagination -*/}
        <div className="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap">
          <nav className="w-full sm:w-auto sm:mr-auto">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronLeft" className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronRight" className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronsRight" className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </nav>
          <select className="w-20 mt-3 form-select box sm:mt-0">
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
          </select>
        </div>
        {/* END: Pagination -*/}
      </div>
    </>
  );
};

export default CampaignContent;
