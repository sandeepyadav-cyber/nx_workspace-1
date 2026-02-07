import React from "react";
import { viewSizeCalculator } from "../utils";

const SuccessSiteIcon = ({
  width = viewSizeCalculator(14, true),
  height = viewSizeCalculator(14, true),
  color = "#27C365",
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
        d="M10.3332 4.4375L5.74984 9.02083L3.6665 6.9375"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SuccessSiteIcon;
