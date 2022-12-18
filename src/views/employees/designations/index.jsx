import React, { useState } from "react";
import DesignationHeader from "./designation-header";
import DesignationList from "./designation-list";
import DesignationModal from "./designation-modal";
import { Modal, ModalBody } from "@/base-components";

const Designations = () => {
  const [showDesignationModal, setShowDesignationModal] = useState(false);
  const [modalState, setModalState] = useState({ isCreate: true, data: null });
  const showModal = (e) => {
    setShowDesignationModal(e.show);
    setModalState(e);
    console.log(e.show);
  };
  return (
    <>
      <DesignationHeader onShowModal={showModal} />
      <DesignationList onShowModal={showModal} />
      <Modal
        show={showDesignationModal}
        onHidden={() => {
          setShowDesignationModal(false);
        }}
        size="modal-lg"
      >
        <ModalBody className="p-5">
          {showDesignationModal && (
            <DesignationModal state={modalState} onShowModal={showModal} />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default Designations;
