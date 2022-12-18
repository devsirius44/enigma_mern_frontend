import React from "react";
import { Lucide, Tippy, Modal, ModalBody } from "@/base-components";
import classnames from "classnames";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import { useState } from "react";
import AttendanceAdminData from "./attendance-admin-data";

const AttendanceAdminList = (props) => {
  var rows = [],
    i = 0,
    len = 31;
  while (++i <= len) rows.push(i);

  return (
    <div>
      <div className="grid grid-cols-12 gap-6 mt-5 overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Employee</th>
              {rows.map(function (i) {
                return <th key={i}>{i}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <AttendanceAdminData onShowModal={props.onShowModal} />
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        {/* BEGIN: Pagination -*/}
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
          <nav className="w-full sm:w-auto sm:mr-auto">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronLeft" className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronRight" className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronsRight" className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </nav>
          <select className="w-20 form-select box mt-3 sm:mt-0">
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
          </select>
        </div>
      </div>
      {/* END: Pagination -*/}
    </div>
  );
};

export default AttendanceAdminList;
