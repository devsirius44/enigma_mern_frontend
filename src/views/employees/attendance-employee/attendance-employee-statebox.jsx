import React from "react";

const AttendanceEmployeeStatebox = (props) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-8">
        <div className="intro-y md:col-span-4 box p-5">
          <h5 className="card-title">
            Timesheet <small className="text-muted">11 Mar 2019</small>
          </h5>
          <div className="box">
            <div className="punch-det">
              <h6>Punch In at</h6>
              <p>Wed, 11th Mar 2019 10.00 AM</p>
            </div>
            <div className="punch-info">
              <div className="punch-hours">
                <span>3.45 hrs</span>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-lg btn-pending  align-center pr-10 pl-10 mr-1 mb-4 mt-4">
                Punch Out
              </button>
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
        <div className="intro-y md:col-span-4 box p-5">
          <h5 className="card-title">Statistics</h5>

          <div className="stats-info box p-5">
            <p>
              Today{" "}
              <strong>
                3.45 <small>/ 8 hrs</small>
              </strong>
            </p>
            <div className="progress">
              <div
                className="progress-bar w-1/2"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="stats-info box p-5">
            <p>
              This Week{" "}
              <strong>
                28 <small>/ 40 hrs</small>
              </strong>
            </p>
            <div className="progress">
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{ width: "31%" }}
                aria-valuenow={31}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          <div className="stats-info box p-5">
            <p>
              This Month{" "}
              <strong>
                90 <small>/ 160 hrs</small>
              </strong>
            </p>
            <div className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "62%" }}
                aria-valuenow={62}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          <div className="stats-info box p-5">
            <p>
              Remaining{" "}
              <strong>
                90 <small>/ 160 hrs</small>
              </strong>
            </p>
            <div className="progress">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: "62%" }}
                aria-valuenow={62}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          <div className="stats-info box p-5">
            <p>
              Overtime <strong>4</strong>
            </p>
            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "22%" }}
                aria-valuenow={22}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        </div>
        <div className="intro-y md:col-span-4 box p-5">
          <h5 className="card-title">Activity</h5>
          <div className="box recent-activity p-5">
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
    </>
  );
};

export default AttendanceEmployeeStatebox;
