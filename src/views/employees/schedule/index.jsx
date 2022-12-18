import React, { useState, useEffect } from "react";
import ScheduleHeader from "./schedule-header";
import ScheduleFilter from "./schedule-filter";
import ScheduleList from "./schedule-list";
import ScheduleModal from "./schedule-modal";
import { Modal, ModalBody } from "@/base-components";
import { getEmployeeData } from "../../../apis/sales";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Schedule = () => {
  const [loading, setLoading] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [modalState, setModalState] = useState({ isCreate: true, data: null });
  const [employeeData, setEmployeeData] = useState();
  const [filteredData, setFilteredData] = useState();
  const showModal = (e) => {
    setShowScheduleModal(e.show);
    setModalState(e);
  };

  const filter = (keywords) => {
    let _filteredData = employeeData;
    if (keywords.employeeName !== "" && keywords.employeeName !== undefined) {
      _filteredData = _filteredData.filter((user) =>
        (user.first_name + " " + user.last_name)
          .toLowerCase()
          .includes(keywords.employeeName.toLowerCase())
      );
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
      <ScheduleHeader onShowModal={showModal} />
      <ScheduleFilter onFilter={filter} />
      <ScheduleList onShowModal={showModal} userData={filteredData} />
      <Modal
        show={showScheduleModal}
        onHidden={() => {
          setShowScheduleModal(false);
        }}
        size="modal-xl"
      >
        <ModalBody className="p-5">
          {showScheduleModal && (
            <ScheduleModal state={modalState} onShowModal={showModal} />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default Schedule;
