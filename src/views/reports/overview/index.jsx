import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
} from "@/base-components";

function OverView() {
  return (
    <>
      <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Overview</h2>
        <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
          <button className="btn btn-primary shadow-md mr-2">Print</button>
          <Dropdown className="ml-auto sm:ml-0">
            <DropdownToggle className="btn px-2 box">
              <span className="w-5 h-5 flex items-center justify-center">
                <Lucide icon="Plus" className="w-4 h-4" />
              </span>
            </DropdownToggle>
            <DropdownMenu className="w-40">
              <DropdownContent>
                <DropdownItem>
                  <Lucide icon="File" className="w-4 h-4 mr-2" /> Export Word
                </DropdownItem>
                <DropdownItem>
                  <Lucide icon="File" className="w-4 h-4 mr-2" /> Export PDF
                </DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      {/* BEGIN: Overview */}
      <div className="intro-y box overflow-hidden mt-5">
        <div className="border-slate-200/60 dark:border-darkmode-400 text-center sm:text-left mb-10">
          <div className="px-5 py-10 sm:px-20 sm:py-20 text-center">
            <div className="text-primary font-semibold text-3xl">
              OverView Report
            </div>
            <div className="mt-1">Jan 02, 2021</div>
          </div>
          <div className="text-lg flex flex-col lg:flex-row md:px-5 lg:px-20 pb-3">
            <div>
              <div className="font-medium whitespace-nowrap">Total Sales</div>
            </div>
            <div className="lg:text-right mt-10 lg:mt-0 lg:ml-auto">
              <div className="font-medium whitespace-nowrap">$154.25</div>
            </div>
          </div>
          <div className="text-lg flex flex-col lg:flex-row md:px-5 lg:px-20 pb-3">
            <div>
              <div className="font-medium whitespace-nowrap">
                Total Guests Seated
              </div>
            </div>
            <div className="lg:text-right mt-10 lg:mt-0 lg:ml-auto">
              <div className="font-medium whitespace-nowrap">12</div>
            </div>
          </div>
          <div className="text-lg flex flex-col lg:flex-row md:px-5 lg:px-20 pb-3">
            <div>
              <div className="font-medium whitespace-nowrap">
                Guests Waiting
              </div>
            </div>
            <div className="lg:text-right mt-10 lg:mt-0 lg:ml-auto">
              <div className="font-medium whitespace-nowrap">3</div>
            </div>
          </div>
          <div className="text-lg flex flex-col lg:flex-row md:px-5 lg:px-20 pb-3">
            <div>
              <div className="font-medium whitespace-nowrap">Active Orders</div>
            </div>
            <div className="lg:text-right mt-10 lg:mt-0 lg:ml-auto">
              <div className="font-medium whitespace-nowrap">6</div> 
            </div>
          </div>
        </div>
      </div>
      {/* END: Overview */}
    </>
  );
}

export default OverView;
