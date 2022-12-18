import React, { useState } from "react";
import ShiftHeader from "./shift-header";
import ShiftList from "./shift-list";
import ShiftModal from "./shift-modal";
import { Modal, ModalBody } from "@/base-components";

const Shift = () => {
  const [showShiftModal, setShowShiftModal] = useState(false);
  const [modalState, setModalState] = useState({ isCreate: true, data: null });
  const showModal = (e) => {
    setShowShiftModal(e.show);
    setModalState(e);
  };
  return (
    <>
      <ShiftHeader onShowModal={showModal} />
      <ShiftList onShowModal={showModal} />
      <Modal
        show={showShiftModal}
        onHidden={() => {
          setShowShiftModal(false);
        }}
        size="modal-xl"
      >
        <ModalBody className="p-5">
          {showShiftModal && (
            <ShiftModal state={modalState} onShowModal={showModal} />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default Shift;
