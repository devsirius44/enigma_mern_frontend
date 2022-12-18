import DailySalesBody from "./daily-sales-body";
import DailySalesFilter from "./daily-sales-filter";
import DailySalesHeader from "./daily-sales-header";

function DailySales() {
  return (
    <>
      <DailySalesHeader/>
      <DailySalesFilter/>
      <DailySalesBody/>
    </>
  );
}

export default DailySales;
