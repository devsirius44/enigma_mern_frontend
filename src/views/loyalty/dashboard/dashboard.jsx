import React from "react";
import {
  Lucide,
  Tippy,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@/base-components";
import ReportBarChart1 from "@/components/report-bar-chart-1/Main";
import ReportDonutChart2 from "@/components/report-donut-chart-2/Main";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import classnames from "classnames";

const Dashboard = () => {
  return (
    <>
      <div className="grid items-center grid-cols-12 gap-6">
        <div className="relative col-span-12 py-6 text-center sm:col-span-6 md:col-span-4 sm:pl-5 md:pl-0 lg:pl-5 sm:text-left">
          <div className="-mb-1 text-sm font-medium 2xl:text-base">
            <span className="text-2xl text-slate-600 dark:text-slate-300">
              We Reward Loyalty!
            </span>
          </div>

          <div className="flex items-center justify-center mt-16 text-base leading-3 2xl:text-lg sm:justify-start text-slate-600 dark:text-slate-300 2xl:mt-24">
            {"Loyalty Members"}
            <Tippy tag="div" content="Total Number of Loyalty Members">
              <Lucide icon="Users" className="w-5 h-5 ml-1.5 mt-0.5" />
            </Tippy>
          </div>
          <div className="mt-5 mb-3 2xl:flex">
            <div className="flex items-center justify-center sm:justify-start">
              <div className="relative pl-3 text-2xl font-medium leading-6 2xl:text-3xl 2xl:pl-4">
                {(2334.0).toFixed(2)}
              </div>
              <a className="ml-4 text-slate-500 2xl:ml-16" href="">
                <Lucide icon="RefreshCcw" className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-5 2xl:flex 2xl:justify-center 2xl:mt-0 2xl:-ml-20 2xl:w-14 2xl:flex-none 2xl:pl-2.5">
              <Tippy
                tag="div"
                className="inline-flex items-center px-2 py-1 text-xs font-medium text-white rounded-full cursor-pointer bg-success 2xl:text-sm 2xl:p-0 2xl:text-success 2xl:bg-transparent 2xl:flex 2xl:justify-center"
                content="20% Higher than last month"
              >
                20%
                <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
              </Tippy>
            </div>
          </div>
          <div className="text-slate-500">Last updated 1 hour ago</div>
        </div>

        <div className="relative col-span-12 py-6 text-center sm:col-span-6 md:col-span-4 sm:pl-5 md:pl-0 lg:pl-5 sm:text-left">
          <div className="flex items-center justify-center mt-16 text-base leading-3 2xl:text-lg sm:justify-start text-slate-600 dark:text-slate-300 2xl:mt-24">
            {"Current Montly Spend"}
            <Tippy tag="div" content="Montly spend">
              <Lucide icon="Users" className="w-5 h-5 ml-1.5 mt-0.5" />
            </Tippy>
          </div>
          <div className="mt-5 mb-3 2xl:flex">
            <div className="flex items-center justify-center sm:justify-start">
              <div className="relative pl-3 text-2xl font-medium leading-6 2xl:text-3xl 2xl:pl-4">
                <span className="absolute top-0 left-0 -mt-1 text-xl 2xl:text-2xl 2xl:mt-0">
                  $
                </span>
                {(2334.0).toFixed(2)}
              </div>
              <a className="ml-4 text-slate-500 2xl:ml-16" href="">
                <Lucide icon="RefreshCcw" className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-5 2xl:flex 2xl:justify-center 2xl:mt-0 2xl:-ml-20 2xl:w-14 2xl:flex-none 2xl:pl-2.5">
              <Tippy
                tag="div"
                className="inline-flex items-center px-2 py-1 text-xs font-medium text-white rounded-full cursor-pointer bg-success 2xl:text-sm 2xl:p-0 2xl:text-success 2xl:bg-transparent 2xl:flex 2xl:justify-center"
                content="20% Higher than last month"
              >
                20%
                <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
              </Tippy>
            </div>
          </div>
          <div className="text-slate-500">Last updated 1 hour ago</div>
        </div>

        <div className="relative col-span-12 py-6 text-center sm:col-span-6 md:col-span-4 sm:pl-5 md:pl-0 lg:pl-5 sm:text-left">
          <div className="flex items-center justify-center mt-16 text-base leading-3 2xl:text-lg sm:justify-start text-slate-600 dark:text-slate-300 2xl:mt-24">
            {"Predicted Montly Spend"}
            <Tippy tag="div" content="Predicted Montly spend">
              <Lucide icon="Users" className="w-5 h-5 ml-1.5 mt-0.5" />
            </Tippy>
          </div>
          <div className="mt-5 mb-3 2xl:flex">
            <div className="flex items-center justify-center sm:justify-start">
              <div className="relative pl-3 text-2xl font-medium leading-6 2xl:text-3xl 2xl:pl-4">
                <span className="absolute top-0 left-0 -mt-1 text-xl 2xl:text-2xl 2xl:mt-0">
                  $
                </span>
                {(3000.0).toFixed(2)}
              </div>
              <a className="ml-4 text-slate-500 2xl:ml-16" href="">
                <Lucide icon="RefreshCcw" className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-5 2xl:flex 2xl:justify-center 2xl:mt-0 2xl:-ml-20 2xl:w-14 2xl:flex-none 2xl:pl-2.5">
              <Tippy
                tag="div"
                className="inline-flex items-center px-2 py-1 text-xs font-medium text-white rounded-full cursor-pointer bg-success 2xl:text-sm 2xl:p-0 2xl:text-success 2xl:bg-transparent 2xl:flex 2xl:justify-center"
                content="20% Higher than last month"
              >
                20%
                <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
              </Tippy>
            </div>
          </div>
          <div className="text-slate-500">Last updated 1 hour ago</div>
        </div>
        <div />
        <div />
        <TabGroup className="py-6 pl-4 -ml-4 border-t border-l border-black border-dashed sm:col-span-6 md:col-span-4 border-opacity-10 sm:border-t-0 md:border-l-0 md:ml-0 md:pl-0">
          <TabList className="w-3/4 p-1 mx-auto rounded-md nav-pills 2xl:w-4/6 bg-slate-200 dark:bg-black/10">
            <Tab className="w-full py-1.5 px-2" tag="button">
              Loyalty
            </Tab>
            <Tab className="w-full py-1.5 px-2" tag="button">
              None Loyalty
            </Tab>
          </TabList>
          <div className="relative mt-8">
            <ReportDonutChart2 height={215} />
            <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full">
              <div className="text-xl font-medium 2xl:text-2xl">2.501</div>
              <div className="text-slate-500 mt-0.5">Active Users</div>
            </div>
          </div>
          <div className="w-10/12 mx-auto mt-8 2xl:w-2/3">
            <div className="flex items-center">
              <div className="w-2 h-2 mr-3 rounded-full bg-primary"></div>
              <span className="truncate">17 - 30 Years old</span>
              <span className="font-medium xl:ml-auto">62%</span>
            </div>
            <div className="flex items-center mt-4">
              <div className="w-2 h-2 mr-3 rounded-full bg-pending"></div>
              <span className="truncate">31 - 50 Years old</span>
              <span className="font-medium xl:ml-auto">33%</span>
            </div>
            <div className="flex items-center mt-4">
              <div className="w-2 h-2 mr-3 rounded-full bg-warning"></div>
              <span className="truncate">&gt;= 50 Years old</span>
              <span className="font-medium xl:ml-auto">10%</span>
            </div>
          </div>
        </TabGroup>

        <div className="col-span-12 row-start-1 px-10 py-6 -mx-5 border-t border-black border-dashed md:row-start-auto md:col-span-4 border-opacity-10 md:border-t-0 md:border-l md:border-r sm:px-28 md:px-5">
          <div className="flex flex-wrap items-center">
            <div className="flex items-center justify-center w-full mb-5 mr-auto sm:w-auto sm:justify-start 2xl:mb-0">
              <div className="w-2 h-2 -mt-4 rounded-full bg-primary"></div>
              <div className="ml-3.5">
                <div className="relative text-xl 2xl:text-2xl font-medium leading-6 2xl:leading-5 pl-3.5 2xl:pl-4">
                  <span className="absolute text-base 2xl:text-xl top-0 left-0 2xl:-mt-1.5">
                    $
                  </span>
                  47,578.77
                </div>
                <div className="mt-2 text-slate-500">Total Income</div>
              </div>
            </div>
            <select className="form-select bg-transparent border-black border-opacity-10 dark:border-darkmode-400 dark:bg-transparent mx-auto sm:mx-0 py-1.5 px-3 w-auto -mt-2">
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
              <option value="custom-date">Custom Date</option>
            </select>
          </div>
          <div className="mt-10 text-slate-600 dark:text-slate-300">
            Loyalty Members spent 75% of the total Income.
          </div>
          <div className="mt-6">
            <ReportBarChart1 height={290} />
          </div>
        </div>
        {/* BEGIN: Top Five Campaigns */}
        <div className="col-span-12 mt-10 xl:col-span-4">
          <div className="flex items-center h-10 intro-y">
            <h2 className="mr-5 text-lg font-medium truncate">
              Top 5 Campaigns
            </h2>
          </div>
          <div className="mt-5">
            {$_.take($f(), 5).map((faker, fakerKey) => (
              <div key={fakerKey} className="intro-y">
                <div className="flex items-center px-4 py-4 mb-3 box zoom-in">
                  <div className="flex-none w-10 h-10 overflow-hidden rounded-md image-fit">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      src={faker.photos[0]}
                    />
                  </div>
                  <div className="ml-4 mr-auto">
                    <div className="font-medium">{faker.users[0].name}</div>
                    <div className="text-slate-500 text-xs mt-0.5">
                      {faker.dates[0]}
                    </div>
                  </div>
                  <div className="px-2 py-1 text-xs font-medium text-white rounded-full cursor-pointer bg-success">
                    122 Points
                  </div>
                </div>
              </div>
            ))}
            <a
              href=""
              className="block w-full py-4 text-center border border-dotted rounded-md intro-y border-slate-400 dark:border-darkmode-300 text-slate-500"
            >
              View More
            </a>
          </div>
        </div>
        {/* END: Top Five Campaigns */}
        {/* BEGIN: Lowest Five Campaigns */}
        <div className="col-span-12 mt-10 xl:col-span-4">
          <div className="flex items-center h-10 intro-y">
            <h2 className="mr-5 text-lg font-medium truncate">
              Lowest 5 Campaigns
            </h2>
          </div>
          <div className="mt-5">
            {$_.take($f(), 5).map((faker, fakerKey) => (
              <div key={fakerKey} className="intro-y">
                <div className="flex items-center px-4 py-4 mb-3 box zoom-in">
                  <div className="flex-none w-10 h-10 overflow-hidden rounded-md image-fit">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      src={faker.photos[0]}
                    />
                  </div>
                  <div className="ml-4 mr-auto">
                    <div className="font-medium">{faker.users[0].name}</div>
                    <div className="text-slate-500 text-xs mt-0.5">
                      {faker.dates[0]}
                    </div>
                  </div>
                  <div className="px-2 py-1 text-xs font-medium text-white rounded-full cursor-pointer bg-success">
                    50 Points
                  </div>
                </div>
              </div>
            ))}
            <a
              href=""
              className="block w-full py-4 text-center border border-dotted rounded-md intro-y border-slate-400 dark:border-darkmode-300 text-slate-500"
            >
              View More
            </a>
          </div>
        </div>
        {/* END: Higest Five Campaigns */}
        <div className="col-span-12 mt-10 xl:col-span-4">
          <div className="flex items-center h-10 intro-y">
            <h2 className="mr-5 text-lg font-medium truncate">
              Higest 5 Campaigns By Points
            </h2>
          </div>
          <div className="mt-5">
            {$_.take($f(), 5).map((faker, fakerKey) => (
              <div key={fakerKey} className="intro-y">
                <div className="flex items-center px-4 py-4 mb-3 box zoom-in">
                  <div className="flex-none w-10 h-10 overflow-hidden rounded-md image-fit">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      src={faker.photos[0]}
                    />
                  </div>
                  <div className="ml-4 mr-auto">
                    <div className="font-medium">{faker.users[0].name}</div>
                    <div className="text-slate-500 text-xs mt-0.5">
                      {faker.dates[0]}
                    </div>
                  </div>
                  <div className="px-2 py-1 text-xs font-medium text-white rounded-full cursor-pointer bg-success">
                    250 Points
                  </div>
                </div>
              </div>
            ))}
            <a
              href=""
              className="block w-full py-4 text-center border border-dotted rounded-md intro-y border-slate-400 dark:border-darkmode-300 text-slate-500"
            >
              View More
            </a>
          </div>
        </div>
        {/* END: Higest Five Campaigns */}
        {/* END: Higest Five Campaigns */}
        <div className="col-span-12 mt-10 xl:col-span-4">
          <div className="flex items-center h-10 intro-y">
            <h2 className="mr-5 text-lg font-medium truncate">
              Higest 10 Visitors
            </h2>
          </div>
          <div className="mt-5">
            {$_.take($f(), 10).map((faker, fakerKey) => (
              <div key={fakerKey} className="intro-y">
                <div className="flex items-center px-4 py-4 mb-3 box zoom-in">
                  <div className="flex-none w-10 h-10 overflow-hidden rounded-md image-fit">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      src={faker.photos[0]}
                    />
                  </div>
                  <div className="ml-4 mr-auto">
                    <div className="font-medium">{faker.users[0].name}</div>
                    <div className="text-slate-500 text-xs mt-0.5">
                      Last Visited {faker.dates[0]}
                    </div>
                  </div>
                  <div className="px-2 py-1 text-xs font-medium text-white rounded-full cursor-pointer bg-success">
                    450 Visits
                  </div>
                </div>
              </div>
            ))}
            <a
              href=""
              className="block w-full py-4 text-center border border-dotted rounded-md intro-y border-slate-400 dark:border-darkmode-300 text-slate-500"
            >
              View More
            </a>
          </div>
        </div>
        {/* END: Higest Five Campaigns */}
        {/* END: Higest Five Campaigns */}
        <div className="col-span-12 mt-10 xl:col-span-4">
          <div className="flex items-center h-10 intro-y">
            <h2 className="mr-5 text-lg font-medium truncate">
              Highest item purchased
            </h2>
          </div>
          <div className="mt-5">
            {$_.take($f(), 10).map((faker, fakerKey) => (
              <div key={fakerKey} className="intro-y">
                <div className="flex items-center px-4 py-4 mb-3 box zoom-in">
                  <div className="flex-none w-10 h-10 overflow-hidden rounded-md image-fit">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      src={faker.photos[0]}
                    />
                  </div>
                  <div className="ml-4 mr-auto">
                    <div className="font-medium">{faker.users[0].name}</div>
                    <div className="text-slate-500 text-xs mt-0.5">
                      Last Buy Date {faker.dates[0]}
                    </div>
                  </div>
                  <div className="px-2 py-1 text-xs font-medium text-white rounded-full cursor-pointer bg-success">
                    500 Items
                  </div>
                </div>
              </div>
            ))}
            <a
              href=""
              className="block w-full py-4 text-center border border-dotted rounded-md intro-y border-slate-400 dark:border-darkmode-300 text-slate-500"
            >
              View More
            </a>
          </div>
        </div>
        {/* END: Higest Five Campaigns */}
        {/* END: Lowest Item Purchased */}
        <div className="col-span-12 mt-10 xl:col-span-4">
          <div className="flex items-center h-10 intro-y">
            <h2 className="mr-5 text-lg font-medium truncate">
              Lowest Item Purchased
            </h2>
          </div>
          <div className="mt-5">
            {$_.take($f(), 10).map((faker, fakerKey) => (
              <div key={fakerKey} className="intro-y">
                <div className="flex items-center px-4 py-4 mb-3 box zoom-in">
                  <div className="flex-none w-10 h-10 overflow-hidden rounded-md image-fit">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      src={faker.photos[0]}
                    />
                  </div>
                  <div className="ml-4 mr-auto">
                    <div className="font-medium">{faker.users[0].name}</div>
                    <div className="text-slate-500 text-xs mt-0.5">
                      Last Buy Date {faker.dates[0]}
                    </div>
                  </div>
                  <div className="px-2 py-1 text-xs font-medium text-white rounded-full cursor-pointer bg-success">
                    10 Items
                  </div>
                </div>
              </div>
            ))}
            <a
              href=""
              className="block w-full py-4 text-center border border-dotted rounded-md intro-y border-slate-400 dark:border-darkmode-300 text-slate-500"
            >
              View More
            </a>
          </div>
        </div>
        {/* END:  Lowest Item Purchased*/}
        {/* BEGIN: Transactions Per Guest*/}
        <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-4 2xl:col-span-12">
          <div className="flex items-center h-10 intro-x">
            <h2 className="mr-5 text-lg font-medium truncate">
              Transactions Per Guest
            </h2>
          </div>
          <div className="mt-5">
            {$_.take($f(), 5).map((faker, fakerKey) => (
              <div key={fakerKey} className="intro-x">
                <div className="flex items-center px-5 py-3 mb-3 box zoom-in">
                  <div className="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      src={faker.photos[0]}
                    />
                  </div>
                  <div className="ml-4 mr-auto">
                    <div className="font-medium">{faker.users[0].name}</div>
                    <div className="text-slate-500 text-xs mt-0.5">
                      {faker.dates[0]}
                    </div>
                  </div>
                  <div
                    className={classnames({
                      "text-success": faker.trueFalse[0],
                      "text-danger": !faker.trueFalse[0],
                    })}
                  >
                    {faker.trueFalse[0] ? "+" : "-"}${faker.totals[0]}
                  </div>
                </div>
              </div>
            ))}
            <a
              href=""
              className="block w-full py-3 text-center border border-dotted rounded-md intro-x border-slate-400 dark:border-darkmode-300 text-slate-500"
            >
              View More
            </a>
          </div>
        </div>
        {/* END: Transactions */}
      </div>
    </>
  );
};

export default Dashboard;
