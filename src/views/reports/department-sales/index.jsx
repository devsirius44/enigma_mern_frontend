import DepartmentSalesBody from "./department-sales-body";
import DepartmentSalesHeader from "./department-sales-header";
import DepartmentSalesFilter from "./department-sales-filter";

function DepartmentSales() {
  return (
    <>
      <DepartmentSalesHeader />
      <DepartmentSalesFilter />
      <DepartmentSalesBody />
    </>
  );
}

export default DepartmentSales;
