import React, { useState } from "react";
import HardwareHeader from "./hardware-header";
import HardwareFilter from "./hardware-filter";
import HardwareContentList from "./hardware-content-list";
import { Modal, ModalBody } from "@/base-components";
import HardwareModal from "./hardware-modal";

const Hardware = () => {
  const [showHardwareModal, setShowHardwareModal] = useState(false);
  const [modalData, setModalData] = useState(false);

  const showModal = (e) => {
    setShowHardwareModal(e.show);
    setModalData(e);
  };

  return (
    <>
      <HardwareHeader onShowModal={showModal} />
      <HardwareFilter />
      <HardwareContentList onShowModal={showModal} />
      {
        <Modal
          show={showHardwareModal}
          onHidden={() => {
            setShowHardwareModal(false);
          }}
          size="modal-xl"
        >
          <ModalBody className="p-5">
            {showHardwareModal && (
              <HardwareModal state={modalData} onShowModal={showModal} />
            )}
          </ModalBody>
        </Modal>
      }
    </>
  );
};

export default Hardware;
