import React, { useState } from "react";
import ShiftHeader from "./shift-header";
import ShiftModal from "./shift-modal";
import ShiftListContent from "./shift-list-content";
import { Modal, ModalBody } from "@/base-components";

const ShiftList = () => {
  const [showShiftModal, setShowShiftModal] = useState(false);
  const [modalState, setModalState] = useState({ isCreate: true, data: null });
  const showModal = (e) => {
      setShowShiftModal(e.show);
      setModalState(e);
  };
  return (
    <div>
      <ShiftListContent onShowModal={showModal} />
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
    </div>
  );
};

export default ShiftList;
