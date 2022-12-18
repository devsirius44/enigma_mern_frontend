import React from "react";
import { useNavigate } from "react-router-dom";
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
import TablePagination from "@mui/material/TablePagination";
import { useState, useEffect } from "react";
import { updateMenuItemStatus } from "../../../apis/sales";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { showNotification } from "../../../components/notification";

const imageAssets = import.meta.globEager(
  `/src/assets/images/*.{jpg,jpeg,png,svg}`
);

const ProductContentList = (props) => {
  let menuItems = props.data;
  let categories = props.categories;
  const navigateTo = useNavigate();

  const [loading, setLoading] = useState(false);
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const [currentPageMenuItems, setCurrentPageItems] = useState();

  // begin pagination settings
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    console.log(newPage);
    setPage(newPage);
    setCurrentPageItems(
      menuItems.slice(newPage * rowsPerPage, (newPage + 1) * rowsPerPage)
    );
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    setCurrentPageItems(menuItems.slice(0, parseInt(event.target.value, 10)));
  };
  // end pagination settings

  const onActiveChange = (e, menuItem) => {
    setLoading(true);
    const body = {
      active: e.target.checked ? "1" : "0",
      itemid: menuItem.itemid,
      venueid: 1,
    };

    updateMenuItemStatus(body)
      .then((res) => {
        if (res.data[0].message === "UPDATED") {
          showNotification("success", "Success", "Successfuly updated.");
        } else {
          showNotification("warning", "Warning", "Not updated.");
        }
        const index = menuItems.findIndex(
          (item) => item.itemid === menuItem.itemid
        );
        menuItems[index].active = body.active;
        setCurrentPageItems(
          menuItems.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (menuItems === undefined) return;
    setCurrentPageItems(
      menuItems.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    );
  }, [menuItems]);

  return (
    <>
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <></>
      )}
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
          <table className="table table-report -mt-2">
            <thead>
              <tr>
                <th className="whitespace-nowrap">IMAGE</th>
                <th className="whitespace-nowrap">NAME</th>
                <th className="text-center whitespace-nowrap">CATEGORY</th>
                <th className="text-center whitespace-nowrap">PRICE</th>
                <th className="text-center whitespace-nowrap">STOCK</th>
                <th className="text-center whitespace-nowrap">STATUS</th>
                <th className="text-center whitespace-nowrap">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {currentPageMenuItems &&
                currentPageMenuItems.map((menuItem, index) => (
                  <tr key={index} className="intro-x">
                    <td className="w-20">
                      <div className="flex">
                        <div className="w-10 h-10 image-fit zoom-in">
                          <Tippy
                            tag="img"
                            alt="Midone Tailwind HTML Admin Template"
                            className="rounded-full"
                            src={imageAssets[
                              "/src/assets/images/food-beverage-8.jpg"
                            ].default}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="w-40">
                      <button
                        className="font-medium whitespace-nowrap"
                        onClick={() => {
                          navigateTo(
                            "/menu/edit-product?itemid=" + menuItem.itemid
                          );
                        }}
                      >
                        {menuItem.item_name}
                      </button>
                    </td>
                    <td className="text-center w-40">
                      {categories[menuItem.menucatid]
                        ? categories[menuItem.menucatid - 1].menu_name
                        : ""}
                    </td>
                    <td className="text-center w-40">
                      {"$" + menuItem.item_price}
                    </td>
                    <td className="text-center w-40"></td>
                    <td className="w-40">
                      <div className="justify-center form-check form-switch">
                        <input
                          id="product-status-active"
                          className="form-check-input"
                          type="checkbox"
                          checked={menuItem.active === "1"}
                          onChange={(e) => {
                            console.log(e.target.checked);
                            onActiveChange(e, menuItem);
                          }}
                        />
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
                                  navigateTo(
                                    "/menu/edit-product?itemid=" +
                                      menuItem.itemid
                                  );
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
          {menuItems && (
            <TablePagination
              component="div"
              count={menuItems.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
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

export default ProductContentList;
