import EmployeeTimecardBody from "./employee-timecard-body";
import EmployeeTimecardHeader from "./employee-timecard-header";
import EmployeeTimecardFilter from "./employee-timecard-filter";

function EmployeeTimecard() {
  return (
    <>
      <EmployeeTimecardHeader/>
      <EmployeeTimecardFilter/>
      <EmployeeTimecardBody/>
    </>
  );
}

export default EmployeeTimecard;
