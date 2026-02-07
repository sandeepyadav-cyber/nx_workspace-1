import React from "react";
import type { IconProps } from "./IconProps";

const CloseIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  color = "#f44336",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width={width}
    height={height}
    viewBox="0 0 48 48"
  >
    <path
      fill={color}
      d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
    />
    <path
      fill="#fff"
      d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"
    />
    <path
      fill="#fff"
      d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"
    />
  </svg>
);

export default CloseIcon;
