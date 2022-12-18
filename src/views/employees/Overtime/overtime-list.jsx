import React, { useState, useEffect } from "react";
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

const imageAssets = import.meta.globEager(
  `/src/assets/images/*.{jpg,jpeg,png,svg}`
);

const OvertimeList = (props) => {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (props.userData !== undefined) {
      setUserData(props.userData);
    }
  }, [props.userData]);

  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
          <table className="table table-report -mt-2">
            <thead>
              <tr>
                <th className="text-left whitespace-nowrap">#</th>
                <th className="text-left whitespace-nowrap">Name</th>
                <th className="text-left whitespace-nowrap">OT Date</th>
                <th className="text-left whitespace-nowrap">OT Hours</th>
                <th className="text-left whitespace-nowrap">OT Type</th>
                <th className="text-left whitespace-nowrap">Description</th>
                <th className="text-left whitespace-nowrap">Status</th>
                <th className="text-left whitespace-nowrap">Approved By</th>
                <th className="text-left whitespace-nowrap">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {userData &&
                userData.map((user, index) => (
                  <tr key={index} className="intro-x">
                    <td className="text-left">{index + 1}</td>
                    <td className="">
                      <div className="text-left flex">
                        <div className="w-10 h-10 image-fit zoom-in mr-3">
                          <Tippy
                            tag="img"
                            alt="Midone Tailwind HTML Admin Template"
                            className="rounded-full"
                            src={imageAssets[
                              "/src/assets/images/profile-8.jpg"
                            ].default}
                          />
                        </div>
                        <div className="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                          <div className="font-medium whitespace-nowrap">
                            {user.first_name + " " + user.last_name}
                          </div>
                          <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                            {user.hourlyrate + "$/hr"}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-left w-40">
                      {new Date().toLocaleDateString()}
                    </td>
                    <td className="text-left w-10">{2}</td>
                    <td className="text-left">Normal day OT 1.5x</td>
                    <td className="text-left">Lorem ipsum dollar</td>
                    <td className="text-left">
                      <button className="btn btn-rounded btn-outline-secondary w-32 mr-2 mb-2">
                        <Lucide icon="Disc" className="w-4 h-4 mr-2" />
                        New
                      </button>
                    </td>
                    <td className="">
                      <div className="text-left flex">
                        <div className="w-10 h-10 image-fit zoom-in mr-3">
                          <Tippy
                            tag="img"
                            alt="Midone Tailwind HTML Admin Template"
                            className="rounded-full"
                            src={imageAssets[
                              "/src/assets/images/profile-15.jpg"
                            ].default}
                          />
                        </div>
                        <div className="m-auto ml-1 align-left">
                          {user.first_name + " " + user.last_name}
                        </div>
                      </div>
                    </td>
                    <td className="table-report__action w-20">
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
                                    data: user,
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
                                <Lucide
                                  icon="Trash2"
                                  className="w-4 h-4 mr-2"
                                />{" "}
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
        </div>
        {/* BEGIN: Pagination -*/}
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
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
          <select className="w-20 form-select box mt-3 sm:mt-0">
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
                className="w-16 h-16 text-danger mx-auto mt-3"
              />
              <div className="text-3xl mt-5">Are you sure?</div>
              <div className="text-slate-500 mt-2">
                Do you really want to delete these records?
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
        {/* END: Delete Confirmation Modal */}
      </div>
    </>
  );
};

export default OvertimeList;
