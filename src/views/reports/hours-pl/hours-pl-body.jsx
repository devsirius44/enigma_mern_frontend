import { faker as $f } from "@/utils";
import * as $_ from "lodash";

function HoursPLBody() {
  return (
    <>
      <div className="intro-y box overflow-hidden mt-5">
        <div className="border-slate-200/60 dark:border-darkmode-400 text-center sm:text-left mb-10">
          <div className="px-5 py-10 sm:px-20 sm:py-20 text-center">
            <div className="text-primary font-semibold text-3xl">
              Hour P/L Report
            </div>
            <div className="mt-1">Jan 02, 2021</div>
            <div className="mt-1">1 PM</div>
          </div>

          <div className="px-5 sm:px-16">
            <div className="overflow-x-auto">
              <table className="table text-lg">
                <thead>
                  <tr>
                    <th className="border-none dark:border-darkmode-400 whitespace-nowrap">
                      HOUR
                    </th>
                    <th className="border-none dark:border-darkmode-400 text-right whitespace-nowrap">
                      COST
                    </th>
                    <th className="border-none dark:border-darkmode-400 text-right whitespace-nowrap">
                      SALES
                    </th>
                    <th className="border-none dark:border-darkmode-400 text-right whitespace-nowrap">
                      P/L
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-none dark:border-darkmode-400">
                      <div className="whitespace-nowrap">Total</div>
                    </td>
                    <td className="text-right border-none dark:border-darkmode-400 w-32">
                      $10.00
                    </td>
                    <td className="text-right border-none dark:border-darkmode-400 w-32">
                      $10.00
                    </td>
                    <td className="text-right border-none dark:border-darkmode-400 w-32">
                      +$0.00
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

export default HoursPLBody;
