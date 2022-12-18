import React, { useState } from "react";
import AltModifierHeader from "./alt-modifier-header";
import AltModifierFilter from "./alt-modifier-filter";
import AltModifierList from "./alt-modifier-list";
import AltModifierModal from "./alt-modifier-modal";
import { Modal, ModalBody } from "@/base-components";

const AltModifier = () => {
  const altMods = JSON.parse(localStorage.getItem("menudata")).menuAltMods;
  const [showAltModifierModal, setShowAltModifierModal] = useState(false);
  const [modalState, setModalState] = useState({ isCreate: true, data: null });
  const [filteredData, setFilteredData] = useState(altMods);

  const showModal = (e) => {
    setShowAltModifierModal(e.show);
    setModalState(e);
  };

  const filter = (keywords) => {
    let _filteredData = altMods;
    if (!!keywords.name) {
      console.log("name is not null or undefined");
      _filteredData = _filteredData.filter((mod) =>
        mod.mod_name.toLowerCase().includes(keywords.name.toLowerCase())
      );
    }
    setFilteredData(_filteredData);
  };

  return (
    <>
      <AltModifierHeader onShowModal={showModal} />
      <AltModifierFilter onFilter={filter} />
      <AltModifierList onShowModal={showModal} data={filteredData} />
      <Modal
        show={showAltModifierModal}
        onHidden={() => {
          setShowAltModifierModal(false);
        }}
        size="modal-lg"
      >
        <ModalBody className="p-5">
          {showAltModifierModal && (
            <AltModifierModal state={modalState} onShowModal={showModal} />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default AltModifier;
