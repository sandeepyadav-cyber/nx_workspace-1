import React from "react";
import { viewSizeCalculator } from "../utils";

const FailSiteIcon = ({
  width = viewSizeCalculator(14, true),
  height = viewSizeCalculator(14, true),
  color = "#FA6262",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7" cy="7" r="7" fill={color} />
      <path
        d="M10 4L4 10"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 4L10 10"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default FailSiteIcon;
