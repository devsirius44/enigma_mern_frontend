import React, { useState, useEffect } from "react";
import SettingsHeader from "../global-settings/settings-header";
import { Modal, ModalBody } from "@/base-components";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import EditSettingsBody from "../global-settings/edit-settings-body";

const GlobalSettings = () => {
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

export default GlobalSettings;
