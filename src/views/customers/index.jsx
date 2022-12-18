import React, { useState } from "react";
import CustomerHeader from "./customer-header";
import CustomerFilter from "./customer-filter";
import CustomerList from "./customer-list";
import CustomerModal from "./customer-modal";
import { Modal, ModalBody } from "@/base-components";

const Customers = () => {
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [modalState, setModalState] = useState({ isCreate: true, data: null });
  const showModal = (e) => {
    setShowCustomerModal(e.show);
    setModalState(e);
    console.log(e.show);
  };
  return (
    <>
      <CustomerHeader onShowModal={showModal} />
      <CustomerFilter />
      <CustomerList onShowModal={showModal} />
      <Modal
        show={showCustomerModal}
        onHidden={() => {
          setShowCustomerModal(false);
        }}
        size="modal-lg"
      >
        <ModalBody className="p-5">
          {showCustomerModal && (
            <CustomerModal state={modalState} onShowModal={showModal} />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default Customers;
