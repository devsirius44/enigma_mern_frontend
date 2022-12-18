import React, { useState, useEffect } from "react";
import SettingsHeader from "../receipt-settings/settings-header";
import EditSettingsBody from "./edit-settings-body";

const ReceiptSettings = () => {
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [modalState, setModalState] = useState({ isCreate: true, data: null });
  const [loading, setLoading] = useState(false);
  const [menuSettings, setMenuSettings] = useState();

  const showModal = (e) => {
    setShowSettingsModal(e.show);
    setModalState(e);
  };
  return (
    <>
      <SettingsHeader />
      <EditSettingsBody />
    </>
  );
};

export default ReceiptSettings;
