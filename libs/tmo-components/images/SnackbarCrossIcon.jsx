import React from "react";
import { viewSizeCalculator } from "../utils";

const SnackbarCrossIcon = ({
  width = viewSizeCalculator(32, true),
  height = viewSizeCalculator(32, true),
  color = "#fff",
  stroke,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 29.3}
      height={height || 30}
      viewBox="0 0 29.3 30"
      fill="none"
      style={{ cursor: "pointer" }}
    >
      <rect
        width={width || 29.3}
        height={height || 30}
        rx="8"
        fill="transparent"
        stroke="none"
        vectorEffect="non-scaling-stroke"
      />

      <path
        d="M15 15L10 20M15 15L20 10M15 15L10 10M15 15L20 20"
        stroke={stroke || "#fff"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SnackbarCrossIcon;
