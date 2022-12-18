import React, { useState } from "react";
import ReservationHeader from "./reservation-header";
import ReservationFilter from "./reservation-filter";
import ReservationContentCalendar from "./reservation-content-calendar";
import ReservationContentList from "./reservation-content-list";
import ReservationModal from "./reservation-modal";
import { Modal, ModalBody } from "@/base-components";

const Reservations = () => {
  const [calendarView, setCalendarView] = useState(true);
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [modalData, setModalData] = useState(false);

  const selectView = (isGrid) => {
    setCalendarView(isGrid);
    console.log(isGrid);
  };

  const showModal = (e) => {
    setShowReservationModal(e.show);
    setModalData(e);
  };

  return (
    <>
      <ReservationHeader onSelectView={selectView} onShowModal={showModal} />
      <ReservationFilter />
      {calendarView ? (
        <ReservationContentList onShowModal={showModal} />
      ) : (
        <ReservationContentCalendar />
      )}
      {
        <Modal
          show={showReservationModal}
          onHidden={() => {
            setShowReservationModal(false);
          }}
          size="modal-xl"
        >
          <ModalBody className="p-5">
            {showReservationModal && (
              <ReservationModal state={modalData} onShowModal={showModal} />
            )}
          </ModalBody>
        </Modal>
      }
    </>
  );
};

export default Reservations;
