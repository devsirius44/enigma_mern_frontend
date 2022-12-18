import React from "react";
import {
  Lucide,
  Modal,
  ModalBody,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
} from "@/base-components";
import { useState } from "react";

const ShiftListContent = (props) => {
  const [data, setData] = useState([
    {
      id: 1,
      shift_name: "10'o clock Shift",
      min_start_time: "09:00:00 am",
      start_time: "10:00:00 am",
      max_start_time: "10:30:00 am",
      min_end_time: "06:00:00 pm",
      end_time: "07:00:00 pm",
      max_end_time: "07:00:00 pm",
      break_time: "30 mins",
    },
    {
      id: 2,
      shift_name: "10:30 shift",
      min_start_time: "10:00:00 am",
      start_time: "10:30:00 am",
      max_start_time: "11:00:00 am",
      min_end_time: "06:30:00 pm",
      end_time: "06:30:00 pm",
      max_end_time: "07:30:00 pm",
      break_time: "45 mins",
    },
    {
      id: 3,
      shift_name: "Daily Rout",
      min_start_time: "06:00:00 am",
      start_time: "06:30:00 am",
      max_start_time: "06:00:00 am",
      min_end_time: "03:00:00 pm",
      end_time: "03:30:00 pm",
      max_end_time: "04:00:00 pm",
      break_time: "60 mins",
    },
  ]);
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  return (
    <div className="grid grid-cols-12 gap-6 mt-5">
      <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
        <table className="table table-report -mt-2">
          <thead>
            <tr>
              <th className="whitespace-nowrap">#</th>
              <th className="whitespace-nowrap">Shift Name</th>
              <th className="text-left whitespace-nowrap">Min Start Time</th>
              <th className="text-left whitespace-nowrap">Start Time</th>
              <th className="text-left whitespace-nowrap">Max Start Time</th>
              <th className="text-left whitespace-nowrap">Min End Time</th>
              <th className="text-left whitespace-nowrap">End Time</th>
              <th className="text-left whitespace-nowrap">Max End Time</th>
              <th className="text-left whitespace-nowrap">Break Time</th>
              <th className="text-left whitespace-nowrap">Status</th>
              <th className="text-left whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((faker, fakerKey) => (
              <tr key={fakerKey} className="intro-x">
                <td className="">{faker.id}</td>
                <td className="">{faker.shift_name}</td>
                <td className="">{faker.min_start_time}</td>
                <td className="">{faker.start_time}</td>
                <td className="">{faker.max_start_time}</td>
                <td className="">{faker.min_end_time}</td>
                <td className="">{faker.end_time}</td>
                <td className="">{faker.max_end_time}</td>
                <td className="">{faker.break_time}</td>
                <td className="">
                  <button className="btn btn-outline-secondary">
                    <Lucide icon="Disc" className="w-4 h-4 mr-2" />
                    Active
                  </button>
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
                                modalName: "shift",
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

export default ShiftListContent;
