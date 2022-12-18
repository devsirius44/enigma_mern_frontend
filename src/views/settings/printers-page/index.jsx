import React, { useState } from "react";
import PrintersPageHeader from "./printers-page-header";
import PrintersFilter from "./printers-filter";
import PrintersContentList from "./printers-content-list";
import { Modal, ModalBody } from "@/base-components";
import PrinterModal from "./printers-modal";

const PrintersPage = () => {
  const [showPrinterModal, setShowPrinterModal] = useState(false);
  const [modalData, setModalData] = useState(false);

  const showModal = (e) => {
    setShowPrinterModal(e.show);
    setModalData(e);
  };

  return (
    <>
      <PrintersPageHeader onShowModal={showModal} />
      <PrintersFilter />
      <PrintersContentList onShowModal={showModal} />
      {
        <Modal
          show={showPrinterModal}
          onHidden={() => {
            setShowPrinterModal(false);
          }}
          size="modal-xl"
        >
          <ModalBody className="p-5">
            {showPrinterModal && (
              <PrinterModal state={modalData} onShowModal={showModal} />
            )}
          </ModalBody>
        </Modal>
      }
    </>
  );
};

export default PrintersPage;
