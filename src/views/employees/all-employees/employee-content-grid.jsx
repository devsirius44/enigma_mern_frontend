import React from "react";
import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";

const EmployeeContentGrid = () => {
  return (
    <div className="grid grid-cols-12 gap-6 mt-5">
      {/* BEGIN: Users Layout */}
      {$_.take($f(), 12).map((faker, fakerKey) => (
        <div
          key={fakerKey}
          className="intro-y col-span-6 md:col-span-4 lg:col-span-3"
        >
          <div className="box">
            <div className="flex items-start px-5 pt-5">
              <div className="w-full flex flex-col lg:flex-row items-center">
                <div className="w-16 h-16 image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={faker.photos[0]}
                  />
                </div>
                <div className="lg:ml-4 text-center lg:text-left mt-3 lg:mt-0">
                  <a href="" className="font-medium">
                    {faker.users[0].name}
                  </a>
                  <div className="text-slate-500 text-xs mt-0.5">
                    {faker.jobs[0]}
                  </div>
                </div>
              </div>
              <Dropdown className="absolute right-0 top-0 mr-5 mt-3">
                <DropdownToggle tag="a" className="w-5 h-5 block" href="#">
                  <Lucide
                    icon="MoreHorizontal"
                    className="w-5 h-5 text-slate-500"
                  />
                </DropdownToggle>
                <DropdownMenu className="w-40">
                  <DropdownContent>
                    <DropdownItem>
                      <Lucide icon="Edit2" className="w-4 h-4 mr-2" /> Edit
                    </DropdownItem>
                    <DropdownItem>
                      <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Delete
                    </DropdownItem>
                  </DropdownContent>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="text-center lg:text-left p-5">
              <div>{faker.news[0].shortContent}</div>
              <div className="flex items-center justify-center lg:justify-start text-slate-500 mt-5">
                <Lucide icon="Mail" className="w-3 h-3 mr-2" />
                {faker.users[0].email}
              </div>
              <div className="flex items-center justify-center lg:justify-start text-slate-500 mt-1">
                <Lucide icon="Instagram" className="w-3 h-3 mr-2" />
                {faker.users[0].name}
              </div>
            </div>
            <div className="text-center lg:text-right p-5 border-t border-slate-200/60 dark:border-darkmode-400">
              <button className="btn btn-secondary py-1 px-2 mr-2">Edit</button>
              <button className="btn btn-danger py-1 px-2">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeContentGrid;
