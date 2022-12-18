const data = [
  {
    department: "BEVERAGES",
    data: [
      {
        category: "JUICES",
        data: [2653.24, 19.0, 86.02, 0.0, 2548.22, 204.78, 16.37],
      },
      {
        category: "SMOOTHIES",
        data: [5245.19, 7.75, 147.95, 0.0, 5089.49, 409.22, 32.69],
      },
      {
        category: "SHOTS",
        data: [289.55, 7.75, 147.95, 0.0, 5089.49, 409.22, 32.69],
      },
      {
        category: "Total",
        data: [8234.01, 26.75, 252.31, 0.0, 7945.95, 639.72, 51.09],
      },
    ],
  },
  {
    department: "BOTTLED",
    data: [
      {
        category: "JUICES",
        data: [2653.24, 19.0, 86.02, 0.0, 2548.22, 204.78, 16.37],
      },
      {
        category: "SMOOTHIES",
        data: [5245.19, 7.75, 147.95, 0.0, 5089.49, 409.22, 32.69],
      },
      {
        category: "SHOTS",
        data: [289.55, 7.75, 147.95, 0.0, 5089.49, 409.22, 32.69],
      },
      {
        category: "Total",
        data: [8234.01, 26.75, 252.31, 0.0, 7945.95, 639.72, 51.09],
      },
    ],
  },
  {
    department: "Total",
    data: [
      {
        category: "",
        data: [15943.24, 26.75, 86.02, 0.0, 2548.22, 204.78, 16.37],
      },
    ],
  },
];

function DepartmentSalesBody() {
  return (
    <>
      <div className="intro-y box overflow-hidden mt-5">
        <div className="border-slate-200/60 dark:border-darkmode-400 text-center sm:text-left mb-10">
          <div className="px-5 py-10 sm:px-20 sm:py-20 text-center">
            <div className="text-primary font-semibold text-3xl">
              Department Sales Report
            </div>
            <div className="mt-1">
              Aug 10, 2022 - Aug 14, 2022
            </div>
          </div>

          <div className="">
            <div className="overflow-x-auto">
              <table className="table text-lg">
                <thead>
                  <tr>
                    <th className="border-none dark:border-darkmode-400 w-32 font-medium">
                      Department
                    </th>
                    <th className="text-right border-none dark:border-darkmode-400 w-32">
                      Category
                    </th>
                    <th className="text-right border-none dark:border-darkmode-400 w-32">
                      Gross Sales
                    </th>
                    <th className="text-right border-none dark:border-darkmode-400 w-32">
                      {"Gross Refunds(-)"}
                    </th>
                    <th className="text-right border-none dark:border-darkmode-400 w-32">
                      {"Discounts & Promos(-)"}
                    </th>
                    <th className="text-right border-none dark:border-darkmode-400 w-32">
                      {"Inclusive & Taxes(-)"}
                    </th>
                    <th className="text-right border-none dark:border-darkmode-400 w-32">
                      {"Net Sales(=)"}
                    </th>
                    <th className="text-right border-none dark:border-darkmode-400 w-32">
                      {"Exclusive Taxes"}
                    </th>
                    <th className="text-right border-none dark:border-darkmode-400 w-32">
                      {"% of Net Sales"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => {
                    return row.data.map((row1, index1) => {
                      return (
                        <tr key={index}>
                          <td>{index1 === 0 && row.department}</td>
                          <td>{row1.category}</td>
                          {row.data[index1].data.map((item, subIndex) => {
                            return (
                              <>
                                {subIndex === 6 ? (
                                  <td key={subIndex}>
                                    {item.toFixed(2) + "%"}
                                  </td>
                                ) : (
                                  <td key={subIndex}>
                                    {item.toFixed(2) + "$"}
                                  </td>
                                )}
                              </>
                            );
                          })}
                        </tr>
                      );
                    });
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DepartmentSalesBody;
