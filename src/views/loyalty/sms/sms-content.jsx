import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  TabPanel,
} from "@/base-components";
import SmsFilter from "./sms-filter";

function SmsContent() {
  return (
    <>
      <div className="mt-5 overflow-hidden intro-y ">
        <div className="mb-4 text-center border-slate-200/60 dark:border-darkmode-400 sm:text-left">
          <div className="px-5 py-4 text-center sm:px-8 sm:py-8">
            <div className="text-3xl font-semibold text-primary">
              Send Text Email
            </div>
            <div className="mt-1">Jan 02, 2021</div>
          </div>

          <div className="flex flex-col pb-3 text-lg lg:flex-row md:px-5 lg:px-20">
            <TabPanel className="w-full p-3 leading-relaxed intro-x">
              <div className="">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Select Loyalty Recipient
                </label>
                <select className="form-select box">
                  <option>Select Recipient</option>
                  <option>Recipient 1</option>
                  <option>Recipient 2</option>
                  <option>Recipient 3</option>
                  <option>Recipient 4</option>
                </select>
              </div>
            </TabPanel>
          </div>
          <div className="flex flex-col pb-3 text-lg lg:flex-row md:px-5 lg:px-20">
            <TabPanel className="w-full p-3 leading-relaxed intro-x">
              <div className="">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Sms Body
                </label>
                <textarea
                  id="update-profile-form-2"
                  type="text"
                  className="form-control"
                  value={" " ? "Premuim Account Active" : ""}
                  onChange={() => {}}
                />
              </div>
            </TabPanel>
          </div>
          <div className="flex justify-start mt-6 ml-24 text-lg">
            <div className="w-full ">
              <button className="w-40 btn btn-primary">
                {" "}
                <Lucide icon="Send" className="w-5 h-5 mr-2" />
                Send SMS
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SmsContent;
