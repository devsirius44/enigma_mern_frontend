import React, { useState } from "react";
import ProviderHeader from "./provider-header";
import ProviderFilter from "./provider-filter";
import ProviderList from "./provider-list";
import ProviderModal from "./provider-modal";
import { Modal, ModalBody } from "@/base-components";
import { faker as $f } from "@/utils";

const Provider = () => {
  const providerData = $f()[0].providers;

  const [showProviderModal, setShowProviderModal] = useState(false);
  const [modalState, setModalState] = useState({ isCreate: true, data: null });
  const [filteredData, setFilteredData] = useState(providerData);

  const showModal = (e) => {
    setShowProviderModal(e.show);
    setModalState(e);
    console.log(e.show);
  };

  const filter = (keywords) => {
    let _filteredData = providerData;
    if (keywords.name !== "" && keywords.name !== undefined) {
      _filteredData = _filteredData.filter((provider) =>
        provider.name.toLowerCase().includes(keywords.name.toLowerCase())
      );
    }
    setFilteredData(_filteredData);
  };
  return (
    <>
      <ProviderHeader onShowModal={showModal} />
      <ProviderFilter onFilter={filter} />
      <ProviderList onShowModal={showModal} data={filteredData} />
      <Modal
        show={showProviderModal}
        onHidden={() => {
          setShowProviderModal(false);
        }}
        size="modal-lg"
      >
        <ModalBody className="p-5">
          {showProviderModal && (
            <ProviderModal state={modalState} onShowModal={showModal} />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default Provider;
