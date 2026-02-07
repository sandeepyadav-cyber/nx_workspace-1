import React from "react";
import { viewSizeCalculator } from "../utils";

const FilterIcon = ({
  width = viewSizeCalculator(17, true),
  height = viewSizeCalculator(16, true),
  color = "#606080",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.85547 4.66797H13.8555M5.52214 8.0013H12.1888M7.52214 11.3346H10.1888"
        stroke={color}
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default FilterIcon;
