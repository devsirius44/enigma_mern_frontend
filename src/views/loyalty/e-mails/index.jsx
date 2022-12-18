import React from "react";
import EmailContent from "./email-content";
import EmailFilter from "./email-filter";
import EmailHeader from "./email-header";

const EmailPage = () => {
  return (
    <>
      <EmailHeader />
      {/* <EmailFilter /> */}
      <EmailContent />
    </>
  );
};

export default EmailPage;
