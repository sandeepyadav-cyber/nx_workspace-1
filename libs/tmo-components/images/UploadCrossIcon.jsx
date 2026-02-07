import React from "react";
import { viewSizeCalculator } from "../utils";

const UploadCrossIcon = ({
  width = viewSizeCalculator(20, true),
  height = viewSizeCalculator(20, true),
  color = "#606080",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 10L5 15M10 10L15 5M10 10L5 5M10 10L15 15"
        stroke="#606080"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default UploadCrossIcon;
