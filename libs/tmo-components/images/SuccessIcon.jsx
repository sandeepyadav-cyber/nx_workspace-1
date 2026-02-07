import React from "react";
import { viewSizeCalculator } from "../utils";

const SuccessIcon = ({
  width = viewSizeCalculator(42, true),
  height = viewSizeCalculator(45, true),
  color = "#68B266",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 42 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_35007_80256"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="42"
        height="45"
      >
        <path
          d="M20.9976 2.5L26.2506 6.332L32.7536 6.32L34.7506 12.508L40.0186 16.32L37.9976 22.5L40.0186 28.68L34.7506 32.492L32.7536 38.68L26.2506 38.668L20.9976 42.5L15.7446 38.668L9.24156 38.68L7.24456 32.492L1.97656 28.68L3.99756 22.5L1.97656 16.32L7.24456 12.508L9.24156 6.32L15.7446 6.332L20.9976 2.5Z"
          fill="white"
          stroke="white"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 22.5L19 27.5L29 17.5"
          stroke="black"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </mask>
      <g mask="url(#mask0_35007_80256)">
        <path d="M-3 -1.5H45V46.5H-3V-1.5Z" fill={color} />
      </g>
    </svg>
  );
};

export default SuccessIcon;
