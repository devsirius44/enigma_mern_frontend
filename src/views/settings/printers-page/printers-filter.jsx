import React, { useState } from "react";

const PrintersFilter = (props) => {
  const [printerId, setPrinterId] = useState();
  const [printerName, setPrinterName] = useState();
  return (
    <>
      <div className="grid grid-cols-4 gap-6 mt-5">
        <input
          type="text"
          className="form-control"
          placeholder="Printer ID"
          onChange={(e) => {
            setPrinterId(e.target.value);
          }}
        />

        <input
          type="text"
          className="form-control"
          placeholder="Printer Name"
          onChange={(e) => {
            setPrinterName(e.target.value);
          }}
        />

        <select className="form-select box">
          <option>Select Printer</option>
          <option>Printer 1</option>
          <option>Printer 2</option>
          <option>Printer 3</option>
          <option>Printer 4</option>
        </select>

        <button
          className="btn btn-primary shadow-md mr-2"
          onClick={() => {
            const keywords = {
              printerId: printerId,
              printerName: printerName,
            };
            props.onFilter(keywords);
          }}
        >
          SEARCH
        </button>
      </div>
    </>
  );
};

export default PrintersFilter;
