import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  TabPanel,
} from "@/base-components";
import EmailFilter from "./email-filter";

function EmailContent() {
  return (
    <>
      <div className="mt-5 overflow-hidden intro-y ">
        <div className="mb-4 text-center border-slate-200/60 dark:border-darkmode-400 sm:text-left">
          <div className="px-5 py-4 text-center sm:px-8 sm:py-8">
            <div className="text-3xl font-semibold text-primary">
              Send Email
            </div>
            <div className="mt-1">Jan 02, 2021</div>
          </div>

          <div className="flex flex-col pb-3 text-lg lg:flex-row md:px-5 lg:px-20">
            <TabPanel className="w-full p-3 leading-relaxed intro-x">
              <div className="">
                <label htmlFor="update-profile-form-2" className="form-label">
                  Send To
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
                  Message Body
                </label>
                <textarea
                  id="update-profile-form-2"
                  type="text"
                  className="form-control"
                  value={" " ? "You are Wellcome" : ""}
                  onChange={() => {}}
                />
              </div>
            </TabPanel>
          </div>
          <div className="flex justify-start mt-6 ml-24 text-lg">
            <div className="w-full ">
              <button className="w-40 btn btn-primary">Send Email</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailContent;
