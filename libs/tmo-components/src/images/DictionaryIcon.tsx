import React from "react";
import type { IconProps } from "./IconProps";
import { viewSizeCalculator } from "../utils";

const DictionaryIcon: React.FC<IconProps> = ({
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
      d="M4 4h12v12H4V4zM7 7h6M7 10h6"
      stroke="#242639"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default DictionaryIcon;
