import React, { useState, useEffect } from "react";
import ProductHeader from "./product-header";
import ProductFilter from "./product-filter";
import ProductContentList from "./product-list";
import ProductModal from "./product-modal";
import { Modal, ModalBody } from "@/base-components";
import { getBasicData } from "../../../apis/sales";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const AllProducts = () => {
  const [showProductModal, setShowProductModal] = useState(false);
  const [modalData, setModalData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [menuItems, setMenuItems] = useState();
  const [filterdItems, setFilteredItems] = useState(menuItems);
  const [categories, setCategories] = useState();

  // load basic data for menu items
  useEffect(() => {
    setLoading(true);
    getBasicData()
      .then((res) => {
        setCategories(res.data.menuCat);
        setMenuItems(res.data.menuItems);
        setFilteredItems(res.data.menuItems);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const showModal = (e) => {
    setShowProductModal(e.show);
    setModalData(e);
  };

  const filter = (keywords) => {
    console.log(keywords);

    let _filter = menuItems;
    if (keywords.itemid !== "") {
      _filter = _filter.filter((item) => item.itemid == keywords.itemid);
    }
    if (keywords.itemname !== "") {
      _filter = _filter.filter((item) =>
        item.item_name.toLowerCase().includes(keywords.itemname.toLowerCase())
      );
    }
    if (keywords.category !== "All") {
      const catId = categories.find(
        (cat) => cat.menu_name === keywords.category
      ).menucat;
      _filter = _filter.filter((item) => item.menucatid === catId);
    }
    setFilteredItems(_filter);
  };

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
      <ProductHeader onShowModal={showModal} />
      <ProductFilter onFilter={filter} categories={categories} />
      <ProductContentList
        onShowModal={showModal}
        data={filterdItems}
        categories={categories}
      />
      <Modal
        show={showProductModal}
        onHidden={() => {
          setShowProductModal(false);
        }}
        size="modal-xl"
      >
        <ModalBody className="p-5">
          {showProductModal && (
            <ProductModal state={modalData} onShowModal={showModal} />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default AllProducts;
