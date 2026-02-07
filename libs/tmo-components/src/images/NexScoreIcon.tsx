import React from "react";
import type { IconProps } from "./IconProps";
import { viewSizeCalculator } from "../utils";

const NexScoreIcon: React.FC<IconProps> = ({
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
      d="M10 5v5l3 3"
      stroke="#242639"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="10" cy="10" r="6" stroke="#242639" strokeWidth="1.5" />
  </svg>
);

export default NexScoreIcon;
