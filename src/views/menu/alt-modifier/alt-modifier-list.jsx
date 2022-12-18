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
import TablePagination from "@mui/material/TablePagination";

const AltModifierList = (props) => {
  const altMods = props.data;
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);

  // begin pagination settings
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [currentPageItems, setCurrentPageItems] = useState();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setCurrentPageItems(
      altMods.slice(newPage * rowsPerPage, (newPage + 1) * rowsPerPage)
    );
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    setCurrentPageItems(altMods.slice(0, parseInt(event.target.value, 10)));
  };
  // end pagination settings

  useEffect(() => {
    setCurrentPageItems(
      altMods.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    );
  }, [altMods]);

  return (
    <>
      <div className="mt-3">
        <table className="table table-report -mt-2">
          <thead>
            <tr>
              <th className="whitespace-nowrap">NAME</th>
              <th className="whitespace-nowrap">PRICE</th>
              <th className="text-left whitespace-nowrap">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {currentPageItems &&
              currentPageItems.map((altMod, index) => (
                <tr key={index} className="intro-x">
                  <td>
                    <a
                      href="#"
                      className="font-medium whitespace-nowrap"
                      onClick={() => {
                        props.onShowModal({
                          show: true,
                          isCreate: false,
                          data: altMod,
                        });
                      }}
                    >
                      {altMod.mod_name}
                    </a>
                  </td>
                  <td className="">
                    <div className="font-medium whitespace-nowrap">
                      {altMod.mod_price !== ""
                        ? parseFloat(altMod.mod_price).toFixed(2)
                        : ""}
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
                                  data: altMod,
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
        {/* BEGIN: Pagination -*/}
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
          {altMods && (
            <TablePagination
              component="div"
              count={altMods.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </div>
        {/* END: Pagination -*/}
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
                Do you really want to delete this modifier?
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

export default AltModifierList;
