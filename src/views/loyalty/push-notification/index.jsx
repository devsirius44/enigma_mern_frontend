import React from "react";
import NotificationContent from "./notification-content";
import NotificationFilter from "./notification-filter";
import NotificationHeader from "./notification-header";

const NotificationPage = () => {
  return (
    <>
      <NotificationHeader />
      {/* <EmailFilter /> */}
      <NotificationContent />
    </>
  );
};

export default NotificationPage;
