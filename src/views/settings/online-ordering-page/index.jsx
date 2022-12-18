import React, { useState } from "react";
import OnlineOrderingHeader from "./online-ordering-header";
import OnlineOrderingContentList from "./online-ordering-list";

const OnlineOrderingPage = () => {
  return (
    <>
      <OnlineOrderingHeader />
      <OnlineOrderingContentList />
    </>
  );
};

export default OnlineOrderingPage;
