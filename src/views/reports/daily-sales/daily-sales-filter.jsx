import React from "react";
import { Litepicker } from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";

const DailySalesFilter = () => {
  return (
    <>
      <div className="intro-y grid grid-cols-12 gap-6 mt-5">
        <select className="form-select box col-span-3">
          <option>All</option>
          {$_.take($f(), 3).map((faker, fakerKey) => (
            <option key={fakerKey}>
              {faker.users[fakerKey].name}
            </option>
          ))}
        </select>

        <Litepicker
          className="form-control block mx-auto col-span-2"
          placeholder="Start Date"
        />
        <Litepicker
          className="form-control block mx-auto col-span-2"
          placeholder="End Date"
        />
        <button className="btn btn-primary shadow-md mr-2 col-span-2">
          VIEW
        </button>
      </div>
    </>
  );
};

export default DailySalesFilter;
