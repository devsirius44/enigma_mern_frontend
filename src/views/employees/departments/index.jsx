import React, { useState } from "react";
import DepartmentHeader from "./department-header";
import DepartmentList from "./department-list";
import DepartmentModal from "./department-modal";
import { Modal, ModalBody } from "@/base-components";

const Departments = () => {
  const [showDepartmentModal, setShowDepartmentModal] = useState(false);
  const [modalState, setModalState] = useState({ isCreate: true, data: null });
  const showModal = (e) => {
    setShowDepartmentModal(e.show);
    setModalState(e);
    console.log(e.show);
  };
  return (
    <>
      <DepartmentHeader onShowModal={showModal} />
      <DepartmentList onShowModal={showModal} />
      <Modal
        show={showDepartmentModal}
        onHidden={() => {
          setShowDepartmentModal(false);
        }}
        size="modal-lg"
      >
        <ModalBody className="p-5">
          {showDepartmentModal && (
            <DepartmentModal state={modalState} onShowModal={showModal} />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default Departments;
