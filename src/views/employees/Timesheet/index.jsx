import React, { useState } from "react";
import TimesheetHeader from "./timesheet-header";
import TimesheetList from "./timesheet-list";
import TimesheetModal from "./timesheet-modal";
import { Modal, ModalBody } from "@/base-components";

const Timesheet = () => {
  const [showHolidayModal, setShowHolidayModal] = useState(false);
  const [modalState, setModalState] = useState({ isCreate: true, data: null });
  const showModal = (e) => {
    setShowHolidayModal(e.show);
    setModalState(e);
    console.log(e.show);
  };
  return (
    <>
      <TimesheetHeader onShowModal={showModal} />
      <TimesheetList onShowModal={showModal} />
      <Modal
        show={showHolidayModal}
        onHidden={() => {
          setShowHolidayModal(false);
        }}
        size="modal-xl"
      >
        <ModalBody className="p-5">
          {showHolidayModal && (
            <TimesheetModal state={modalState} onShowModal={showModal} />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default Timesheet;
