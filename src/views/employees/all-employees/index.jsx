import React, { useEffect, useState } from "react";
import EmployeeHeader from "./employee-header";
import EmployeeFilter from "./employee-filter";
import EmployeeContentGrid from "./employee-content-grid";
import EmployeeContentList from "./employee-content-list";
import EmployeeModal from "./employee-modal";
import { Modal, ModalBody } from "@/base-components";
import { getEmployeeData } from "../../../apis/sales";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const AllEmployees = () => {
  const [loading, setLoading] = useState(false);
  const [gridView, setGridView] = useState(true);
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);
  const [modalData, setModalData] = useState(false);
  const [employeeData, setEmployeeData] = useState();
  const [filteredData, setFilteredData] = useState();

  const selectView = (isGrid) => {
    setGridView(isGrid);
  };

  const showModal = (e) => {
    setShowEmployeeModal(e.show);
    setModalData(e);
  };

  const filter = (keywords) => {
    let _filteredData = employeeData;
    if (keywords.employeeId !== undefined && keywords.employeeId !== "") {
      _filteredData = _filteredData.filter((user) => {
        if (user.userid == keywords.employeeId) return user;
      });
    }

    console.log(_filteredData);
    if (keywords.employeeName !== undefined && keywords.employeeName !== "") {
      _filteredData = _filteredData.filter((user) => {
        if (
          (user.first_name + " " + user.last_name)
            .toLowerCase()
            .includes(keywords.employeeName.toLowerCase())
        )
          return user;
      });
    }

    setFilteredData(_filteredData);
  };

  useEffect(() => {
    setLoading(true);
    getEmployeeData()
      .then((r) => {
        setEmployeeData(r.data.userData);
        setFilteredData(r.data.userData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
      <EmployeeHeader onSelectView={selectView} onShowModal={showModal} />
      <EmployeeFilter onFilter={filter} />
      <EmployeeContentList onShowModal={showModal} userData={filteredData} />
      {
        <Modal
          show={showEmployeeModal}
          onHidden={() => {
            setShowEmployeeModal(false);
          }}
          size="modal-xl"
        >
          <ModalBody className="p-5">
            {showEmployeeModal && (
              <EmployeeModal state={modalData} onShowModal={showModal} />
            )}
          </ModalBody>
        </Modal>
      }
    </>
  );
};

export default AllEmployees;
