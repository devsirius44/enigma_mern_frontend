import { faker as $f } from "@/utils";
import * as $_ from "lodash";

function EmployeeShiftBody() {
  return (
    <>
      <div className="intro-y box overflow-hidden mt-5">
        <div className="border-slate-200/60 dark:border-darkmode-400 text-center sm:text-left mb-10">
          <div className="px-5 py-10 sm:px-20 sm:py-20 text-center">
            <div className="text-primary font-semibold text-3xl">
              Employee Shift Report
            </div>
            <div className="mt-1">Jan 02, 2021</div>
          </div>
         
          {$f()[0].shiftReports.map((faker, fakerKey) => {
            return faker.type === "title" ? (
              <div key={fakerKey} className="text-lg flex flex-col lg:flex-row md:px-5 lg:px-20 pt-5 pb-3 justify-center">
                <div className="font-medium whitespace-nowrap">
                  {faker.label}
                </div>
              </div>
            ) : (
              <div key={fakerKey} className="text-lg flex flex-col lg:flex-row md:px-5 lg:px-20 pb-3">
                <div>
                  <div className="font-medium whitespace-nowrap">
                    {faker.label}
                  </div>
                </div>
                <div className="lg:text-right mt-10 lg:mt-0 lg:ml-auto">
                  <div className="font-medium whitespace-nowrap">
                    {faker.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default EmployeeShiftBody;
