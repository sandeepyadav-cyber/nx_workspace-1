import React from "react";
import { viewSizeCalculator } from "../utils";
import type { IconProps } from "./IconProps";

const ReportIcon: React.FC<IconProps> = ({
  width = viewSizeCalculator(16, true),
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
      d="M4 3h12v14H4V3zM7 7h6M7 10h6M7 13h4"
      stroke="#242639"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default ReportIcon;
