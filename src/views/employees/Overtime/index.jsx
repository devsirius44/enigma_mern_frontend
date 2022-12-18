import React, { useEffect, useState } from "react";
import OvertimeHeader from "./overtime-header";
import OvertimeList from "./overtime-list";
import OvertimeModal from "./overtime-modal";
import OvertimeStatebox from "./overtime-statebox";
import { Modal, ModalBody } from "@/base-components";
import { getEmployeeData } from "../../../apis/sales";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Overtime = () => {
  const [loading, setLoading] = useState(false);
  const [showOvertimeModal, setShowOvertimeModal] = useState(false);
  const [modalState, setModalState] = useState({ isCreate: true, data: null });
  const [employeeData, setEmployeeData] = useState();
  const showModal = (e) => {
    setShowOvertimeModal(e.show);
    setModalState(e);
    console.log(e.show);
  };

  useEffect(() => {
    setLoading(true);
    getEmployeeData()
      .then((r) => {
        setEmployeeData(r.data.userData);
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
      <OvertimeHeader onShowModal={showModal} />
      <OvertimeStatebox />
      <OvertimeList onShowModal={showModal} userData={employeeData} />
      <Modal
        show={showOvertimeModal}
        onHidden={() => {
          setShowOvertimeModal(false);
        }}
        size="modal-lg"
      >
        <ModalBody className="p-5">
          {showOvertimeModal && (
            <OvertimeModal state={modalState} onShowModal={showModal} />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default Overtime;
