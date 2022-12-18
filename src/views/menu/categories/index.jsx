import React, { useState, useEffect } from "react";
import CategoryHeader from "./category-header";
import CategoryList from "./category-list";
import CategoryModal from "./category-modal";
import { Modal, ModalBody } from "@/base-components";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { getBasicData } from "../../../apis/sales";

const Categories = () => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [modalState, setModalState] = useState({ isCreate: true, data: null });
  const [loading, setLoading] = useState(false);
  const [menuCategories, setMenuCategories] = useState();
  const showModal = (e) => {
    setShowCategoryModal(e.show);
    setModalState(e);
  };

  // load basic data for menu items
  useEffect(() => {
    setLoading(true);
    getBasicData()
      .then((res) => {
        setMenuCategories(res.data.menuCat);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <></>
      )}
      <CategoryHeader onShowModal={showModal} />
      <CategoryList onShowModal={showModal} data={menuCategories} />
      <Modal
        show={showCategoryModal}
        onHidden={() => {
          setShowCategoryModal(false);
        }}
        size="modal-lg"
      >
        <ModalBody className="p-5">
          {showCategoryModal && (
            <CategoryModal state={modalState} onShowModal={showModal} />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default Categories;
