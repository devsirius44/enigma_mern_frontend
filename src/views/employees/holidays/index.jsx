import React, { useState } from "react";
import HolidayHeader from "./holiday-header";
import HolidayList from "./holiday-list";
import HolidayModal from "./holiday-modal";
import { Modal, ModalBody } from "@/base-components";

const Holidays = () => {
  const [showHolidayModal, setShowHolidayModal] = useState(false);
  const [modalState, setModalState] = useState({ isCreate: true, data: null });
  const showModal = (e) => {
    setShowHolidayModal(e.show);
    setModalState(e);
    console.log(e.show);
  };
  return (
    <>
      <HolidayHeader onShowModal={showModal} />
      <HolidayList onShowModal={showModal} />
      <Modal
        show={showHolidayModal}
        onHidden={() => {
          setShowHolidayModal(false);
        }}
        size="modal-lg"
      >
        <ModalBody className="p-5">
          {showHolidayModal && (
            <HolidayModal state={modalState} onShowModal={showModal} />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default Holidays;
