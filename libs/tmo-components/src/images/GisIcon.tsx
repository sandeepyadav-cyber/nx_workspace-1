import React from "react";
import type { IconProps } from "./IconProps";
import { viewSizeCalculator } from "../utils";

const GisIcon: React.FC<IconProps> = ({
  width = viewSizeCalculator(20, true),
  height = viewSizeCalculator(20, true),
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 10l5-5 4 4 5-5"
      stroke="#242639"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 7v6l4 2"
      stroke="#242639"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default GisIcon;
