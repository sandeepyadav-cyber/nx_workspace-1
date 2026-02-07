import React from "react";
import { viewSizeCalculator } from "../utils";

const DownNextIcon = ({
  width = viewSizeCalculator(16, true),
  height = viewSizeCalculator(16, true),
  color = "#606080",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33329 9L7.99996 11.6667L10.6666 9M5.33329 5L7.99996 7.66667L10.6666 5"
        stroke={color}
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DownNextIcon;
