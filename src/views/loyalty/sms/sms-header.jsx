import React from "react";
import { Lucide } from "@/base-components";

const SmsHeader = (props) => {
  return (
    <>
      <div className="flex flex-wrap items-center col-span-12 mt-10 intro-y sm:flex-nowrap">
        <h2 className="text-lg font-medium intro-y">Send SMS</h2>
        <div className="hidden mx-auto md:block text-slate-500"></div>
      </div>
    </>
  );
};

export default SmsHeader;
