import React from "react";
import { viewSizeCalculator } from "../utils";

const NokiaEricssonReportIcon = ({
  width = viewSizeCalculator(1.25),
  height = viewSizeCalculator(1.25),
  color = "#242639",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="11.75"
        y="5.25"
        width="5.5"
        height="9.5"
        rx="1.25"
        stroke={color}
        stroke-width="1.5"
      />
      <rect x="2" y="4.5" width="7" height="1.5" rx="0.75" fill={color} />
      <rect x="2" y="13.5" width="7" height="1.5" rx="0.75" fill={color} />
      <rect x="2" y="7.5" width="7" height="1.5" rx="0.75" fill={color} />
      <rect x="2" y="10.5" width="7" height="1.5" rx="0.75" fill={color} />
    </svg>
  );
};

export default NokiaEricssonReportIcon;
