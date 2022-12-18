import React, { useEffect } from "react";
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
import { useState } from "react";

const imageAssets = import.meta.globEager(
  `/src/assets/images/*.{jpg,jpeg,png,svg}`
);

const EmployeeContentList = (props) => {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (props.userData !== undefined) {
      setUserData(props.userData);
    }
  }, [props.userData]);

  return (
    <div className="grid grid-cols-12 gap-6 mt-5">
      <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
        <table className="table table-report -mt-2">
          <thead>
            <tr>
              <th className="whitespace-nowrap">PHOTO</th>
              <th className="whitespace-nowrap">USERNAME</th>
              <th className="text-center whitespace-nowrap">EMAIL</th>
              <th className="text-center whitespace-nowrap">MOBILE</th>
              <th className="text-center whitespace-nowrap">JOIN DATE</th>
              <th className="text-center whitespace-nowrap">ROLE</th>
              <th className="text-center whitespace-nowrap">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {userData &&
              userData.map((user, index) => (
                <tr key={index} className="intro-x">
                  <td className="w-20">
                    <div className="flex">
                      <div className="w-10 h-10 image-fit zoom-in">
                        <Tippy
                          tag="img"
                          alt="Midone Tailwind HTML Admin Template"
                          className="rounded-full"
                          src={imageAssets[
                            "/src/assets/images/profile-12.jpg"
                          ].default}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="w-40">
                    <a
                      href="#"
                      className="font-medium whitespace-nowrap"
                      onClick={() => {
                        props.onShowModal({
                          show: true,
                          isCreate: false,
                          data: user,
                        });
                      }}
                    >
                      {user.first_name + " " + user.last_name}
                    </a>
                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                      {user.hourlyrate + "$/hr"}
                    </div>
                  </td>
                  <td className="text-center w-40">{"fake@email.com"}</td>
                  <td className="text-center w-40">{"1234567890"}</td>
                  <td className="text-center">
                    {new Date().toLocaleDateString()}
                  </td>
                  <td className="text-center">
                    <select className="form-select box">
                      <option>Web Developer</option>
                      <option>Web Designer</option>
                      <option>Android Developer</option>
                      <option>Ios Developer</option>
                    </select>
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
  );
};

export default EmployeeContentList;
