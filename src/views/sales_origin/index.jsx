import {
  Lucide,
  Tippy,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Litepicker,
  TinySlider,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import classnames from "classnames";
import ReportBarChart1 from "@/components/report-bar-chart-1/Main";
import ReportLineChart from "@/components/report-line-chart/Main";
import ReportPieChart from "@/components/report-pie-chart/Main";
import ReportDonutChart from "@/components/report-donut-chart/Main";
import ReportDonutChart1 from "@/components/report-donut-chart-1/Main";
import ReportDonutChart2 from "@/components/report-donut-chart-2/Main";
import SimpleLineChart1 from "@/components/simple-line-chart-1/Main";
import ReportMap from "@/components/report-map/Main";
import { useRef, useState } from "react";

function Sales() {
  const [salesReportFilter, setSalesReportFilter] = useState();
  const importantNotesRef = useRef();
  const prevImportantNotes = () => {
    importantNotesRef.current.tns.goTo("prev");
  };
  const nextImportantNotes = () => {
    importantNotesRef.current.tns.goTo("next");
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12">
        <div className="mt-14 mb-3 grid grid-cols-12 sm:gap-10 intro-y">
          <div className="col-span-12 sm:col-span-6 md:col-span-4 py-6 sm:pl-5 md:pl-0 lg:pl-5 relative text-center sm:text-left">
            <Dropdown className="absolute pt-0.5 2xl:pt-0 mt-5 2xl:mt-6 top-0 right-0">
              <DropdownToggle tag="a" className="block" href="#">
                <Lucide
                  icon="MoreVertical"
                  className="w-5 h-5 text-slate-500"
                />
              </DropdownToggle>
              <DropdownMenu className="w-40">
                <DropdownContent>
                  <DropdownItem>
                    <Lucide icon="FileText" className="w-4 h-4 mr-2" />
                    Monthly Report
                  </DropdownItem>
                  <DropdownItem>
                    <Lucide icon="FileText" className="w-4 h-4 mr-2" />
                    Annual Report
                  </DropdownItem>
                </DropdownContent>
              </DropdownMenu>
            </Dropdown>
            <div className="text-sm 2xl:text-base font-medium -mb-1">
              Hi Angelina,
              <span className="text-slate-600 dark:text-slate-300 font-normal">
                welcome back!
              </span>
            </div>
            <div className="text-base 2xl:text-lg justify-center sm:justify-start flex items-center text-slate-600 dark:text-slate-300 leading-3 mt-14 2xl:mt-24">
              Total Amount Earned
              <Tippy tag="div" content="Total amount earned of your sales">
                <Lucide icon="AlertCircle" className="w-5 h-5 ml-1.5 mt-0.5" />
              </Tippy>
            </div>
            <div className="2xl:flex mt-5 mb-3">
              <div className="flex items-center justify-center sm:justify-start">
                <div className="relative text-2xl 2xl:text-3xl font-medium leading-6 pl-3 2xl:pl-4">
                  <span className="absolute text-xl 2xl:text-2xl top-0 left-0 -mt-1 2xl:mt-0">
                    $
                  </span>
                  142,402,210
                </div>
                <a className="text-slate-500 ml-4 2xl:ml-16" href="">
                  <Lucide icon="RefreshCcw" className="w-4 h-4" />
                </a>
              </div>
              <div className="mt-5 2xl:flex 2xl:justify-center 2xl:mt-0 2xl:-ml-20 2xl:w-14 2xl:flex-none 2xl:pl-2.5">
                <Tippy
                  tag="div"
                  className="font-medium inline-flex bg-success text-white rounded-full px-2 py-1 text-xs 2xl:text-sm 2xl:p-0 2xl:text-success 2xl:bg-transparent 2xl:flex items-center cursor-pointer 2xl:justify-center"
                  content="49% Higher than last month"
                >
                  49%
                  <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                </Tippy>
              </div>
            </div>
            <div className="text-slate-500">Last updated 1 hour ago</div>
            <div className="2xl:text-base text-slate-600 dark:text-slate-300 mt-6 -mb-1">
              Total net margin
              <a
                href=""
                className="underline decoration-dotted underline-offset-4 text-primary dark:text-slate-400"
              >
                $12,921,050
              </a>
            </div>
            <Dropdown className="mt-14 2xl:mt-24">
              <DropdownToggle className="btn btn-rounded-primary w-44 2xl:w-52 px-4 relative justify-start">
                Download Reports
                <span className="w-8 h-8 absolute flex justify-center items-center right-0 top-0 bottom-0 my-auto ml-auto mr-1">
                  <Lucide icon="ChevronDown" className="w-4 h-4" />
                </span>
              </DropdownToggle>
              <DropdownMenu className="w-44 2xl:w-52">
                <DropdownContent>
                  <DropdownItem>
                    <Lucide icon="FileText" className="w-4 h-4 mr-2" />
                    Monthly Report
                  </DropdownItem>
                  <DropdownItem>
                    <Lucide icon="FileText" className="w-4 h-4 mr-2" />
                    Annual Report
                  </DropdownItem>
                </DropdownContent>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="row-start-2 md:row-start-auto col-span-12 md:col-span-4 py-6 border-black border-opacity-10 border-t md:border-t-0 md:border-l md:border-r border-dashed px-10 sm:px-28 md:px-5 -mx-5">
            <div className="flex flex-wrap items-center">
              <div className="flex items-center w-full sm:w-auto justify-center sm:justify-start mr-auto mb-5 2xl:mb-0">
                <div className="w-2 h-2 bg-primary rounded-full -mt-4"></div>
                <div className="ml-3.5">
                  <div className="relative text-xl 2xl:text-2xl font-medium leading-6 2xl:leading-5 pl-3.5 2xl:pl-4">
                    <span className="absolute text-base 2xl:text-xl top-0 left-0 2xl:-mt-1.5">
                      $
                    </span>
                    47,578.77
                  </div>
                  <div className="text-slate-500 mt-2">Yearly budget</div>
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
              You have spent about 35% of your annual budget.
            </div>
            <div className="mt-6">
              <ReportBarChart1 height={290} />
            </div>
          </div>
          <TabGroup className="col-span-12 sm:col-span-6 md:col-span-4 py-6 border-black border-opacity-10 border-t sm:border-t-0 border-l md:border-l-0 border-dashed -ml-4 pl-4 md:ml-0 md:pl-0">
            <TabList className="nav-pills w-3/4 2xl:w-4/6 bg-slate-200 dark:bg-black/10 rounded-md mx-auto p-1">
              <Tab className="w-full py-1.5 px-2" tag="button">
                Active
              </Tab>
              <Tab className="w-full py-1.5 px-2" tag="button">
                Inactive
              </Tab>
            </TabList>
            <TabPanels className="mt-6">
              <TabPanel>
                <div className="relative mt-8">
                  <ReportDonutChart2 height={215} />
                  <div className="flex flex-col justify-center items-center absolute w-full h-full top-0 left-0">
                    <div className="text-xl 2xl:text-2xl font-medium">
                      2.501
                    </div>
                    <div className="text-slate-500 mt-0.5">Active Users</div>
                  </div>
                </div>
                <div className="mx-auto w-10/12 2xl:w-2/3 mt-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="truncate">17 - 30 Years old</span>
                    <span className="font-medium xl:ml-auto">62%</span>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                    <span className="truncate">31 - 50 Years old</span>
                    <span className="font-medium xl:ml-auto">33%</span>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                    <span className="truncate">&gt;= 50 Years old</span>
                    <span className="font-medium xl:ml-auto">10%</span>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* BEGIN: General Report */}
          <div className="col-span-12 mt-8">
            <div className="intro-y flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                General Report
              </h2>
              <a href="" className="ml-auto flex items-center text-primary">
                <Lucide icon="RefreshCcw" className="w-4 h-4 mr-3" /> Reload
                Data
              </a>
            </div>
            <div className="grid grid-cols-12 gap-6 mt-5">
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div className="report-box zoom-in">
                  <div className="box p-5">
                    <div className="flex">
                      <Lucide
                        icon="ShoppingCart"
                        className="report-box__icon text-primary"
                      />
                      <div className="ml-auto">
                        <Tippy
                          tag="div"
                          className="report-box__indicator bg-success cursor-pointer"
                          content="33% Higher than last month"
                        >
                          33%
                          <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="text-3xl font-medium leading-8 mt-6">
                      4.710
                    </div>
                    <div className="text-base text-slate-500 mt-1">
                      Item Sales
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div className="report-box zoom-in">
                  <div className="box p-5">
                    <div className="flex">
                      <Lucide
                        icon="CreditCard"
                        className="report-box__icon text-pending"
                      />
                      <div className="ml-auto">
                        <Tippy
                          tag="div"
                          className="report-box__indicator bg-danger cursor-pointer"
                          content="2% Lower than last month"
                        >
                          2%
                          <Lucide
                            icon="ChevronDown"
                            className="w-4 h-4 ml-0.5"
                          />
                        </Tippy>
                      </div>
                    </div>
                    <div className="text-3xl font-medium leading-8 mt-6">
                      3.721
                    </div>
                    <div className="text-base text-slate-500 mt-1">
                      New Orders
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div className="report-box zoom-in">
                  <div className="box p-5">
                    <div className="flex">
                      <Lucide
                        icon="Monitor"
                        className="report-box__icon text-warning"
                      />
                      <div className="ml-auto">
                        <Tippy
                          tag="div"
                          className="report-box__indicator bg-success cursor-pointer"
                          content="12% Higher than last month"
                        >
                          12%{" "}
                          <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="text-3xl font-medium leading-8 mt-6">
                      2.149
                    </div>
                    <div className="text-base text-slate-500 mt-1">
                      Total Products
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div className="report-box zoom-in">
                  <div className="box p-5">
                    <div className="flex">
                      <Lucide
                        icon="User"
                        className="report-box__icon text-success"
                      />
                      <div className="ml-auto">
                        <Tippy
                          tag="div"
                          className="report-box__indicator bg-success cursor-pointer"
                          content="22% Higher than last month"
                        >
                          22%{" "}
                          <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="text-3xl font-medium leading-8 mt-6">
                      152.040
                    </div>
                    <div className="text-base text-slate-500 mt-1">
                      Unique Visitor
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: General Report */}
          {/* BEGIN: Sales Report */}
          <div className="col-span-12 lg:col-span-6 mt-8">
            <div className="intro-y block sm:flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Sales Report
              </h2>
              <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                <Lucide
                  icon="Calendar"
                  className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
                />
                <Litepicker
                  value={salesReportFilter}
                  onChange={setSalesReportFilter}
                  options={{
                    autoApply: false,
                    singleMode: false,
                    numberOfColumns: 2,
                    numberOfMonths: 2,
                    showWeekNumbers: true,
                    dropdowns: {
                      minYear: 1990,
                      maxYear: null,
                      months: true,
                      years: true,
                    },
                  }}
                  className="form-control sm:w-56 box pl-10"
                />
              </div>
            </div>
            <div className="intro-y box p-5 mt-12 sm:mt-5">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex">
                  <div>
                    <div className="text-primary dark:text-slate-300 text-lg xl:text-xl font-medium">
                      $15,000
                    </div>
                    <div className="mt-0.5 text-slate-500">This Month</div>
                  </div>
                  <div className="w-px h-12 border border-r border-dashed border-slate-200 dark:border-darkmode-300 mx-4 xl:mx-5"></div>
                  <div>
                    <div className="text-slate-500 text-lg xl:text-xl font-medium">
                      $10,000
                    </div>
                    <div className="mt-0.5 text-slate-500">Last Month</div>
                  </div>
                </div>
                <Dropdown className="md:ml-auto mt-5 md:mt-0">
                  <DropdownToggle className="btn btn-outline-secondary font-normal">
                    Filter by Category
                    <Lucide icon="ChevronDown" className="w-4 h-4 ml-2" />
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent className="overflow-y-auto h-32">
                      <DropdownItem>PC & Laptop</DropdownItem>
                      <DropdownItem>Smartphone</DropdownItem>
                      <DropdownItem>Electronic</DropdownItem>
                      <DropdownItem>Photography</DropdownItem>
                      <DropdownItem>Sport</DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="report-chart">
                <ReportLineChart height={275} className="mt-6 -mb-6" />
              </div>
            </div>
          </div>
          {/* END: Sales Report */}
          {/* BEGIN: Weekly Top Seller */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
            <div className="intro-y flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">Order Types</h2>
              <a href="" className="ml-auto text-primary truncate">
                Show More
              </a>
            </div>
            <div className="intro-y box p-5 mt-5">
              <div className="mt-3">
                <ReportPieChart height={213} />
              </div>
              <div className="w-52 sm:w-auto mx-auto mt-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="truncate">Dine In</span>
                  <span className="font-medium ml-auto">62%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                  <span className="truncate">To GO</span>
                  <span className="font-medium ml-auto">33%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                  <span className="truncate">Delivery</span>
                  <span className="font-medium ml-auto">10%</span>
                </div>
              </div>
            </div>
          </div>
          {/* END: Weekly Top Seller */}
          {/* BEGIN: Sales Report */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
            <div className="intro-y flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">Providers</h2>
              <a href="" className="ml-auto text-primary truncate">
                Show More
              </a>
            </div>
            <div className="intro-y box p-5 mt-5">
              <div className="mt-3">
                <ReportDonutChart height={213} />
              </div>
              <div className="w-52 sm:w-auto mx-auto mt-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="truncate">DoorDash</span>
                  <span className="font-medium ml-auto">15%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                  <span className="truncate">UberEats</span>
                  <span className="font-medium ml-auto">10%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                  <span className="truncate">GrubHub</span>
                  <span className="font-medium ml-auto">15%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                  <span className="truncate">Website</span>
                  <span className="font-medium ml-auto">25%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                  <span className="truncate">Mobile App</span>
                  <span className="font-medium ml-auto">35%</span>
                </div>
              </div>
            </div>
          </div>
          {/* END: Sales Report */}
          {/* BEGIN: General Report */}
          <div className="col-span-12 grid grid-cols-12 gap-6 mt-8">
            <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
              <div className="box p-5 zoom-in">
                <div className="flex items-center">
                  <div className="w-2/4 flex-none">
                    <div className="text-lg font-medium truncate">
                      Target Sales
                    </div>
                    <div className="text-slate-500 mt-1">300 Sales</div>
                  </div>
                  <div className="flex-none ml-auto relative">
                    <ReportDonutChart1 width={90} height={90} />
                    <div className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0">
                      20%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
              <div className="box p-5 zoom-in">
                <div className="flex">
                  <div className="text-lg font-medium truncate mr-3">
                    Social Media
                  </div>
                  <div className="py-1 px-2 flex items-center rounded-full text-xs bg-slate-100 dark:bg-darkmode-400 text-slate-500 cursor-pointer ml-auto truncate">
                    320 Followers
                  </div>
                </div>
                <div className="mt-1">
                  <SimpleLineChart1 height={58} className="-ml-1" />
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
              <div className="box p-5 zoom-in">
                <div className="flex items-center">
                  <div className="w-2/4 flex-none">
                    <div className="text-lg font-medium truncate">
                      New Products
                    </div>
                    <div className="text-slate-500 mt-1">1450 Products</div>
                  </div>
                  <div className="flex-none ml-auto relative">
                    <ReportDonutChart1 width={90} height={90} />
                    <div className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0">
                      45%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
              <div className="box p-5 zoom-in">
                <div className="flex">
                  <div className="text-lg font-medium truncate mr-3">
                    Posted Ads
                  </div>
                  <div className="py-1 px-2 flex items-center rounded-full text-xs bg-slate-100 dark:bg-darkmode-400 text-slate-500 cursor-pointer ml-auto truncate">
                    180 Campaign
                  </div>
                </div>
                <div className="mt-1">
                  <SimpleLineChart1 height={58} className="-ml-1" />
                </div>
              </div>
            </div>
          </div>
          {/* END: General Report */}
        </div>
      </div>
    </div>
  );
}

export default Sales;
