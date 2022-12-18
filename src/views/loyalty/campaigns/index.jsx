import React, { useState } from "react";
import CampaignContent from "./campaign-content";
import CampaignFilter from "./campaign-filter";
import CampaignHeader from "./campaigns-header";
import CampaignModal from "./capmaign-modal";
import { Modal, ModalBody } from "@/base-components";

const Campaigns = () => {
  const [showCampaignModal, setShowCampaignModal] = useState(false);
  const [modalData, setModalData] = useState(false);
  const [modalState, setModalState] = useState({ isCreate: true, data: null });

  const showModal = (e) => {
    setShowCampaignModal(e.show);
    setModalData(e);
  };

  return (
    <>
      <CampaignHeader onShowModal={showModal} />
      <CampaignFilter />
      <CampaignContent onShowModal={showModal} />

      <Modal
        show={showCampaignModal}
        onHidden={() => {
          setShowCampaignModal(false);
        }}
        size="modal-xl"
      >
        <ModalBody className="p-5">
          {showCampaignModal && (
            <CampaignModal state={modalState} onShowModal={showModal} />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default Campaigns;
