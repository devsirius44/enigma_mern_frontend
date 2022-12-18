import { faker as $f } from "@/utils";
import * as $_ from "lodash";

function EmployeeTimecardBody() {
  return (
    <>
      <div className="intro-y box overflow-hidden mt-5">
        <div className="border-slate-200/60 dark:border-darkmode-400 text-center sm:text-left mb-10">
          <div className="px-5 py-10 sm:px-20 sm:py-20 text-center">
            <div className="text-primary font-semibold text-3xl">
              Employee TimeCard Report
            </div>
            <div className="mt-1">Jan 02, 2021</div>
          </div>
         
          <div className="px-5 sm:px-16">
            <div className="overflow-x-auto">
              <table className="table text-lg">
                <tbody>
                  <tr>
                    <td className="border-none dark:border-darkmode-400 w-32 font-medium">
                      Total
                    </td>
                    <td className="text-right border-none dark:border-darkmode-400 w-32">
                      6474m
                    </td>
                    <td className="text-right border-none dark:border-darkmode-400 w-32">
                      330m
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <div className="text-lg flex flex-col lg:flex-row md:px-5 lg:px-20 pt-10 pb-7 justify-center font-medium">
                  Daily Breakdown
              </div>

              <table className="table text-lg">
                <tbody>
                  <tr>
                    <td className="border-none dark:border-darkmode-400  w-32">
                      7/6
                    </td>
                    <td className="text-right border-none dark:border-darkmode-400 w-32">
                      404m
                    </td>
                    <td className="text-right border-none dark:border-darkmode-400 w-32">
                      20m
                    </td>
                  </tr>
                  <tr>
                    <td className="border-none dark:border-darkmode-400  w-32">
                      7/7
                    </td>
                    <td className="text-right border-none dark:border-darkmode-400 w-32">
                      374m
                    </td>
                    <td className="text-right border-none dark:border-darkmode-400 w-32">
                      20m
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeTimecardBody;
