import React, { useState } from "react";
import PromotionHeader from "./promotion-header";
import PromotionFilter from "./promotion-filter";
import PromotionList from "./promotion-list";
import PromotionModal from "./promotion-modal";
import { Modal, ModalBody } from "@/base-components";

const Promotion = () => {
  const promoData = JSON.parse(localStorage.getItem("menudata")).venuePromo;

  const [showPromotionModal, setShowPromotionModal] = useState(false);
  const [modalState, setModalState] = useState({ isCreate: true, data: null });
  const [filteredData, setFilteredData] = useState(promoData);

  const showModal = (e) => {
    setShowPromotionModal(e.show);
    setModalState(e);
    console.log(e.show);
  };

  const filter = (keywords) => {
    let _filteredData = promoData;
    if (keywords.name !== "" && keywords.name !== undefined) {
      _filteredData = _filteredData.filter((promo) =>
        promo.promo_name.toLowerCase().includes(keywords.name.toLowerCase())
      );
    }
    setFilteredData(_filteredData);
  };
  return (
    <>
      <PromotionHeader onShowModal={showModal} />
      <PromotionFilter onFilter={filter} />
      <PromotionList onShowModal={showModal} data={filteredData} />
      <Modal
        show={showPromotionModal}
        onHidden={() => {
          setShowPromotionModal(false);
        }}
        size="modal-lg"
      >
        <ModalBody className="p-5">
          {showPromotionModal && (
            <PromotionModal state={modalState} onShowModal={showModal} />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default Promotion;
