import { Chart } from "@/base-components";
import { colors } from "@/utils";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { colorScheme as colorSchemeStore } from "@/stores/color-scheme";
import { darkMode as darkModeStore } from "@/stores/dark-mode";
import { useMemo } from "react";
import { usePreviousProps } from "@mui/utils";

const labelcolors = [
  "bg-primary",
  "bg-secondary",
  "bg-success",
  "bg-info",
  "bg-warning",
  "bg-pending",
];

function Main(props) {
  const darkMode = useRecoilValue(darkModeStore);
  const colorScheme = useRecoilValue(colorSchemeStore);

  const isEmpty = () => {
    let res = true;
    props.data.map((p) => {
      if (p > 0) res = false;
    });
    return res;
  };

  const data = useMemo(() => {
    return {
      labels: props.labels,
      datasets: [
        {
          data: props.data,
          backgroundColor: colorScheme ? props.colors : "",
          hoverBackgroundColor: colorScheme ? props.colors : "",
          borderWidth: 5,
          borderColor: darkMode ? colors.darkmode[700]() : colors.white,
        },
      ],
    };
  });

  const options = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
    };
  });

  return (
    <>
      <div className="intro-y flex items-center h-10">
        <h2 className="text-lg font-medium truncate mr-5">Order Types</h2>
      </div>
      <div className="intro-y box p-5 mt-5 h-[400px] flex justify-center items-center">
        {props.data && !isEmpty() ? (
          <>
            <div className="mt-3">
              <Chart
                type="pie"
                width={props.width}
                height={props.height}
                data={data}
                options={options}
                className={props.className}
              />

              <div className="w-52 mx-auto mt-8">
                {props.labels.map((label, index) => {
                  return (
                    <>
                      <div className="flex items-center">
                        <div
                          className={
                            "w-2 h-2 rounded-full mr-3 " + labelcolors[index]
                          }
                        ></div>
                        <span className="truncate">{label}</span>
                        <span className="font-medium ml-auto">
                          {(props.data[index] || 0) + "%"}
                        </span>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="h-500">No Result</div>
          </>
        )}
      </div>
    </>
  );
}

Main.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

Main.defaultProps = {
  width: "auto",
  height: "auto",
  className: "",
};

export default Main;
