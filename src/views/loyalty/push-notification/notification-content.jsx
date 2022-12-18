import React, { useState } from "react";
import {
  Lucide,
  Tippy,
  Modal,
  ModalBody,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";

const NotificationContent = (props) => {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);

  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 overflow-auto intro-y lg:overflow-visible">
          <table className="table -mt-2 table-report">
            <thead>
              <tr>
                <th className="whitespace-nowrap">Recipient</th>
                <th className="whitespace-nowrap">Date</th>
                <th className="text-center whitespace-nowrap">Description</th>
                <th className="text-center whitespace-nowrap">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {$_.take($f(), 5).map((faker, fakerKey) => (
                <tr key={fakerKey} className="intro-x">
                  <td className="">
                    <div className="flex">
                      <div className="w-10 h-10 mr-3 image-fit zoom-in">
                        <Tippy
                          tag="img"
                          alt="Midone Tailwind HTML Admin Template"
                          className="rounded-full"
                          src={faker.photos[0]}
                          content={`Uploaded at ${faker.dates[0]}`}
                        />
                      </div>
                      <div className="mt-3 text-center lg:ml-2 lg:mr-auto lg:text-left lg:mt-0">
                        <a
                          href="#"
                          className="font-medium whitespace-nowrap"
                          onClick={() => {
                            props.onShowModal({
                              show: true,
                              isCreate: false,
                              data: faker,
                            });
                          }}
                        >
                          {faker.users[0].name}
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          {"FT-0000" + fakerKey}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="w-40 text-center">{faker.dates[0]}</td>
                  <td className="text-center">
                    Your Password has been successfully changed
                  </td>
                  <td className="w-20 table-report__action">
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
                                  data: faker,
                                });
                              }}
                            >
                              <Lucide icon="Edit2" className="w-4 h-4 mr-2" />{" "}
                              Edit
                              {/* </a> */}
                            </DropdownItem>
                            <DropdownItem
                              className="text-primary"
                              onClick={() => {
                                setDeleteConfirmationModal(true);
                              }}
                            >
                              <Lucide icon="Send" className="w-4 h-4 mr-2" />{" "}
                              Send
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
        </div>
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
                Do you really want to delete these records?
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
        {/* END: Delete Confirmation Modal */}
      </div>
    </>
  );
};

export default NotificationContent;
