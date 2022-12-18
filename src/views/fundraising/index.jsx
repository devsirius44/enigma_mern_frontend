import React, { useState } from "react";
import FundraisingHeader from "./fundraising-header";
import FundraisingList from "./fundrasing-list";
import FundraisingModal from "./fundrasing-modal";
import { Modal, ModalBody } from "@/base-components";
import FundraisingFilter from "./fundraising-filter";

const Fundraising = () => {
  const [showHolidayModal, setShowHolidayModal] = useState(false);
  const [modalState, setModalState] = useState({ isCreate: true, data: null });
  const showModal = (e) => {
    setShowHolidayModal(e.show);
    setModalState(e);
  };
  return (
    <>
      <FundraisingHeader onShowModal={showModal} />
      <FundraisingFilter />
      <FundraisingList onShowModal={showModal} />
      <Modal
        show={showHolidayModal}
        onHidden={() => {
          setShowHolidayModal(false);
        }}
        size="modal-xl"
      >
        <ModalBody className="p-5">
          {showHolidayModal && (
            <FundraisingModal state={modalState} onShowModal={showModal} />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default Fundraising;
