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
import ReportBarChart1 from "@/components/report-bar-chart-1/Main";
import ReportLineChart from "@/components/report-line-chart/Main";
import ReportPieChart from "@/components/report-pie-chart/Main";
import ReportDonutChart from "@/components/report-donut-chart/Main";
import ReportDonutChart1 from "@/components/report-donut-chart-1/Main";
import ReportDonutChart2 from "@/components/report-donut-chart-2/Main";
import SimpleLineChart1 from "@/components/simple-line-chart-1/Main";
import { useState, useEffect } from "react";
import { getSalesData, getBasicData } from "../../apis/sales";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { colors } from "@/utils";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";

const formatDate = (date, spliter) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join(spliter);
};

const formatDateLabel = (date) => {
  const year = date.substring(0, 4);
  const month = date.substring(4, 6);
  const day = date.substring(6, 8);

  return month + "/" + day + "/" + year;
};

const getMonday = (d) => {
  d = new Date(d);
  var day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
};

function Sales() {
  const [loading, setLoading] = useState(false);
  const [isCustomDate, setIsCustomDate] = useState(false);
  const [dateRange, setDateRange] = useState("");
  const [totalAmountEarned, setTotalAmountEarned] = useState(0);
  const [basicData, setBasicData] = useState({});
  const [customDates, setCustomDates] = useState("");
  const [sales, setSales] = useState({});
  const [orderTypeData, setOrderTypeData] = useState();
  const [providerData, setProviderData] = useState();

  const onSalesChange = (today, startDate, endDate) => {
    // call api to get sale report response.
    let res = {};
    setLoading(true);
    getSalesData("America/Los_Angeles", 1, today, startDate, endDate)
      .then((r) => {
        setSales(r.data);
        calcTotalAmountEarn(r.data);
        filterOrderType(r.data);
        filterProvider(r.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const calcTotalAmountEarn = (res) => {
    let totalAmount = 0.0;
    res.orderData &&
      res.orderData.map((order, index) => {
        if (order.subtotal === "" || order.tax === "") return;
        totalAmount += parseFloat(order.subtotal);
        totalAmount += parseFloat(order.tax);
      });
    setTotalAmountEarned(totalAmount);
  };

  const filterOrderType = (_sales) => {
    let order_types = basicData.order_types;
    console.log(order_types);
    if (order_types === undefined || _sales === undefined) return;
    let total = 0;
    order_types.map((order) => {
      order.count = 0;
      _sales.orderData.map((_order) => {
        if (order.id === _order.order_type_id) {
          order.count += 1;
        }
      });
      total += order.count;
    });

    order_types.map((order) => {
      order.percentage = (order.count / total) * 100;
    });

    order_types[0].color = colors.primary(0.9);
    order_types[1].color = colors.secondary(0.9);
    order_types[2].color = colors.success(0.9);
    order_types[3].color = colors.info(0.9);
    order_types[4].color = colors.warning(0.9);
    order_types[5].color = colors.pending(0.9);

    setOrderTypeData(order_types);
  };

  const provider = [
    { id: 2, name: "POS" },
    { id: 6, name: "DoorDash" },
    { id: 7, name: "UberEats" },
    { id: 8, name: "Grubhub" },
    { id: 5, name: "Hungr" },
  ];

  const filterProvider = (_sales) => {
    let _provider = provider;
    let total = 0;
    _provider.map((p) => {
      p.count = 0;
      _sales.orderData.map((order) => {
        if (order.sourceid === p.id) {
          p.count += 1;
        }
      });
      total += p.count;
    });

    _provider.map((p) => {
      p.percentage = parseInt((p.count / total) * 100);
    });

    _provider[0].color = colors.primary(0.9);
    _provider[1].color = colors.secondary(0.9);
    _provider[2].color = colors.success(0.9);
    _provider[3].color = colors.info(0.9);
    _provider[4].color = colors.warning(0.9);

    setProviderData(_provider);
  };

  const onDateChange = (e) => {
    let today, startDate, endDate;

    if (e.target.value === "today") {
      today = formatDate(new Date(), "");
      startDate = today;
      endDate = today;
    } else if (e.target.value === "this-week") {
      today = formatDate(new Date(), "");
      startDate = formatDate(getMonday(new Date(), ""))
        .replace(",", "")
        .replace(",", "");
      endDate = today;
    } else if (e.target.value === "this-month") {
      const firstDay = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        1
      );
      today = formatDate(new Date(), "");
      startDate = formatDate(firstDay, "");
      endDate = today;
    } else if (e.target.value === "this-year") {
      var d = new Date(new Date().getFullYear(), 0, 1);
      today = formatDate(new Date(), "");
      startDate = formatDate(d, "");
      endDate = today;
    }
    if (e.target.value === "custom-date") {
      setIsCustomDate(true);
      today = formatDate(new Date(), "");
      startDate = today;
      endDate = today;
    } else {
      setIsCustomDate(false);
      console.log(startDate, endDate);
      setDateRange(
        formatDateLabel(startDate) + " - " + formatDateLabel(endDate)
      );
    }

    onSalesChange(today, startDate, endDate);
  };

  useEffect(() => {
    setLoading(true);
    getBasicData()
      .then((res) => {
        setBasicData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });

    const today = formatDate(new Date(), "");
    onSalesChange(today, today, today);
  }, []);

  useEffect(() => {
    if (customDates === "") return;
    const today = formatDate(new Date(), "");
    const startDate = formatDate(customDates.split("-")[0], "");
    const endDate = formatDate(customDates.split("-")[1], "");

    onSalesChange(today, startDate, endDate);
  }, [customDates]);

  return (
    <>
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <></>
      )}

      <div className="grid grid-cols-12 gap-6">
        <select
          id="datetypeselector"
          className="absolute mt-6 top-20 form-select bg-transparent border-black border-opacity-10 dark:border-darkmode-400 dark:bg-transparent mx-auto sm:mx-0 py-1.5 px-3 w-[150px] -mt-2"
          onChange={onDateChange}
          defaultValue="today"
        >
          <option value="today">Today</option>
          <option value="this-week">This Week</option>
          <option value="this-month">This Month</option>
          <option value="this-year">This Year</option>
          <option value="custom-date">Custom Date</option>
        </select>
        {isCustomDate ? (
          <div
            className="absolute top-18 w-[200px] mt-16 text-slate-500 "
            id="customdatepicker"
          >
            <Lucide
              icon="Calendar"
              className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
            />
            <Litepicker
              value={customDates}
              onChange={setCustomDates}
              placeholder="Select Start & End Date"
              options={{
                autoApply: false,
                singleMode: false,
                numberOfColumns: 2,
                numberOfMonths: 2,
              }}
              className="form-control w-56 h-8 pl-10 bg-transparent border-black border-opacity-10 dark:border-darkmode-400 dark:bg-transparent"
            />
          </div>
        ) : (
          <label
            className="absolute top-18 mt-16 text-slate-500 text"
            id="daterangelabel"
          >
            {dateRange}
          </label>
        )}
        <div className="col-span-12 mt-12">
          <div className="mt-14 mb-3 grid grid-cols-12 sm:gap-10 intro-y">
            <div className="col-span-12 sm:col-span-6 md:col-span-4 py-6 sm:pl-5 md:pl-0 lg:pl-5 relative text-center sm:text-left">
              <div className="text-sm 2xl:text-base font-medium -mb-1">
                <span className="text-slate-600 dark:text-slate-300 text-2xl">
                  Welcome!
                </span>
              </div>
              <div className="text-base 2xl:text-lg justify-center sm:justify-start flex items-center text-slate-600 dark:text-slate-300 leading-3 mt-16 2xl:mt-24">
                {"Total Amount Earned"}
                <Tippy tag="div" content="Total amount earned of your sales">
                  <Lucide
                    icon="AlertCircle"
                    className="w-5 h-5 ml-1.5 mt-0.5"
                  />
                </Tippy>
              </div>
              <div className="2xl:flex mt-5 mb-3">
                <div className="flex items-center justify-center sm:justify-start">
                  <div className="relative text-2xl 2xl:text-3xl font-medium leading-6 pl-3 2xl:pl-4">
                    <span className="absolute text-xl 2xl:text-2xl top-0 left-0 -mt-1 2xl:mt-0">
                      $
                    </span>
                    {totalAmountEarned.toFixed(2)}
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

            <div className="col-span-12 sm:col-span-6 md:col-span-4 py-6 border-black border-opacity-10 border-t sm:border-t-0 border-l md:border-l-0 border-dashed -ml-4 pl-4 md:ml-0 md:pl-0">
              <div className="intro-y flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">
                  Weekly Best Sellers
                </h2>
              </div>
              <div className="mt-5">
                {$_.take($f(), 4).map((faker, fakerKey) => (
                  <div key={fakerKey} className="intro-y">
                    <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                      <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
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
                      <div className="py-1 px-2 rounded-full text-xs bg-success text-white cursor-pointer font-medium">
                        137 Sales
                      </div>
                    </div>
                  </div>
                ))}
                <a
                  href=""
                  className="intro-y w-full block text-center rounded-md py-4 border border-dotted border-slate-400 dark:border-darkmode-300 text-slate-500"
                >
                  View More
                </a>
              </div>
            </div>
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
                            <Lucide
                              icon="ChevronUp"
                              className="w-4 h-4 ml-0.5"
                            />
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
                            <Lucide
                              icon="ChevronUp"
                              className="w-4 h-4 ml-0.5"
                            />
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
                            <Lucide
                              icon="ChevronUp"
                              className="w-4 h-4 ml-0.5"
                            />
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
              {
                <ReportPieChart
                  height={213}
                  labels={orderTypeData && orderTypeData.map((val) => val.name)}
                  data={
                    orderTypeData &&
                    orderTypeData.map((val) => parseInt(val.percentage))
                  }
                  colors={
                    orderTypeData && orderTypeData.map((val) => val.color)
                  }
                />
              }
            </div>
            {/* END: Weekly Top Seller */}
            {/* BEGIN: Sales Report */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
              {
                <>
                  <ReportDonutChart
                    height={213}
                    labels={providerData && providerData.map((val) => val.name)}
                    data={
                      providerData && providerData.map((val) => val.percentage)
                    }
                    colors={
                      providerData && providerData.map((val) => val.color)
                    }
                  />
                </>
              }
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
    </>
  );
}

export default Sales;
