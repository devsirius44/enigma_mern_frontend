import React from "react";
import { LoadingIcon } from "@/base-components";

const LoadingSpinner = ({ onRemove, onChange, src }) => {
  return (
    <>
      <div className="loader-container"></div>
      <LoadingIcon icon="three-dots" className="w-16 loader-spinner" />
    </>
  );
};

export default LoadingSpinner;
