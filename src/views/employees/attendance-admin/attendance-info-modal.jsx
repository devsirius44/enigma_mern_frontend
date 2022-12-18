import React from "react";
import { faker as $f } from "@/utils";
import { Litepicker } from "@/base-components";

const AttendanceAdminModal = (props) => {
  return (
    <>
      <div className="intro-y box lg:mt-5">
        <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
          <h2 className="font-medium text-base mr-auto text-center">
            Attendance Info
          </h2>
        </div>
        <div className="p-5">
          <div className="flex flex-col-reverse xl:flex-row flex-col">
            <div className="flex-1 mt-6 xl:mt-0">

            <div className="grid grid-cols-12 gap-6">
                <div className="md:col-span-6">
                  <div className="card punch-status">
                    <div className="card-body">
                      <h5 className="card-title">Timesheet <small className="text-muted">11 Mar 2019</small></h5>
                      <div className="punch-det">
                        <h6>Punch In at</h6>
                        <p>Wed, 11th Mar 2019 10.00 AM</p>
                      </div>
                      <div className="punch-info">
                        <div className="punch-hours">
                          <span>3.45 hrs</span>
                        </div>
                      </div>
                      <div className="punch-det">
                        <h6>Punch Out at</h6>
                        <p>Wed, 20th Feb 2019 9.00 PM</p>
                      </div>
                      <div className="statistics">
                        <div className="grid grid-cols-12 gap-3">
                          <div className="col-span-6 text-center">
                            <div className="stats-box">
                              <p>Break</p>
                              <h6>1.21 hrs</h6>
                            </div>
                          </div>
                          <div className="col-span-6 text-center">
                            <div className="stats-box">
                              <p>Overtime</p>
                              <h6>3 hrs</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div className="card recent-activity">
                    <div className="card-body">
                      <h5 className="card-title">Activity</h5>
                      <ul className="res-activity-list">
                        <li>
                          <p className="mb-0">Punch In at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            10.00 AM.
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">Punch Out at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            11.00 AM.
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">Punch In at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            11.15 AM.
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">Punch Out at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            1.30 PM.
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">Punch In at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            2.00 PM.
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">Punch Out at</p>
                          <p className="res-activity-time">
                            <i className="fa fa-clock-o" />
                            7.30 PM.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="intro-x col-span-12 flex items-center justify-end mt-5">
                <button
                  type="button"
                  className="btn btn-secondary w-20 mt-3"
                  onClick={() => {
                    props.onShowModal({ show: false });
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendanceAdminModal;
