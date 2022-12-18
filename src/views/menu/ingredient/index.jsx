import React, { useState } from "react";
import IngredientHeader from "./ingredient-header";
import IngredientFilter from "./ingredient-filter";
import IngredientList from "./ingredient-list";
import IngredientModal from "./ingredient-modal";
import { Modal, ModalBody } from "@/base-components";

const Ingredient = () => {
  const [showIngredientModal, setShowIngredientModal] = useState(false);
  const [modalState, setModalState] = useState({ isCreate: true, data: null });
  const showModal = (e) => {
    setShowIngredientModal(e.show);
    setModalState(e);
    console.log(e.show);
  };
  return (
    <>
      <IngredientHeader onShowModal={showModal} />
      <IngredientFilter />
      <IngredientList onShowModal={showModal} />
      <Modal
        show={showIngredientModal}
        onHidden={() => {
          setShowIngredientModal(false);
        }}
        size="modal-lg"
      >
        <ModalBody className="p-5">
          {showIngredientModal && (
            <IngredientModal state={modalState} onShowModal={showModal} />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default Ingredient;
