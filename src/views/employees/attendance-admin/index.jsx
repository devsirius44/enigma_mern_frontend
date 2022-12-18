import React, { useState } from "react";
import AttendanceAdminHeader from "./attendance-admin-header";
import AttendanceAdminFilter from "./attendance-admin-filter";
import AttendanceAdminList from "./attendance-admin-list";
import AttendanceAdminModal from "./attendance-info-modal";
import { Modal, ModalBody } from "@/base-components";

const AllAttendanceAdmin = () => {
  const [showAttendanceAdminModal, setShowAttendanceAdminModal] =
    useState(false);
  const [modalData, setModalData] = useState(false);

  const showModal = (e) => {
    setShowAttendanceAdminModal(e.show);
    setModalData(e);
  };

  return (
    <>
      <AttendanceAdminHeader />
      <AttendanceAdminFilter />
      <AttendanceAdminList onShowModal={showModal} />
      <Modal
        show={showAttendanceAdminModal}
        onHidden={() => {
          setShowAttendanceAdminModal(false);
        }}
        size="modal-xl"
      >
        <ModalBody className="p-5">
          {showAttendanceAdminModal && (
            <AttendanceAdminModal state={modalData} onShowModal={showModal} />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default AllAttendanceAdmin;
