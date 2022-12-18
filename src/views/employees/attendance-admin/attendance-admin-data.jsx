import React from "react";
import { Link } from "react-router-dom";
import { Lucide, Tippy, Modal, ModalBody } from "@/base-components";

const AttendanceAdminData = (props) => {
  return (
    <>
      <tr>
        <td>
          <h2 className="table-avatar">
            <Link to="/app/profile/employee-profile">John Doe</Link>
          </h2>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <div className="half-day">
            <span className="first-off">
              <a
                href=""
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <Lucide icon="Check" className="w-4 h-4 text-success" />
              </a>
            </span>
            <span className="first-off">
              <Lucide icon="X" className="w-4 h-4 text-danger" />
            </span>
          </div>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <div className="half-day">
            <span className="first-off">
              <Lucide icon="X" className="w-4 h-4 text-danger" />
            </span>
            <span className="first-off">
              <a
                href=""
                data-bs-toggle="modal"
                data-bs-target="#attendance_info"
              >
                <Lucide icon="Check" className="w-4 h-4 text-success" />
              </a>
            </span>
          </div>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
      </tr>
      <tr>
        <td>
          <h2 className="table-avatar">
            <Link to="/app/profile/employee-profile">Richard Miles</Link>
          </h2>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
      </tr>
      <tr>
        <td>
          <h2 className="table-avatar">
            <Link to="/app/profile/employee-profile">John Smith</Link>
          </h2>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
      </tr>
      <tr>
        <td>
          <h2 className="table-avatar">
            <Link to="/app/profile/employee-profile">Mike Litorus</Link>
          </h2>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <Lucide icon="X" className="w-4 h-4 text-danger" />{" "}
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
        <td>
          <a
            href="#"
            onClick={() => {
              props.onShowModal({
                show: true,
              });
            }}
          >
            <Lucide icon="Check" className="w-4 h-4 text-success" />
          </a>
        </td>
      </tr>
    </>
  );
};

export default AttendanceAdminData;
