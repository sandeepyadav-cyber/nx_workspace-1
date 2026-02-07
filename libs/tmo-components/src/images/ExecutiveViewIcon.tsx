import React from "react";
import { viewSizeCalculator } from "../utils";
import type { IconProps } from "./IconProps";

const ExecutiveViewIcon: React.FC<IconProps> = ({
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
      d="M9.99935 8.33464C11.8403 8.33464 13.3327 6.84225 13.3327 5.0013C13.3327 3.16035 11.8403 1.66797 9.99935 1.66797C8.1584 1.66797 6.66602 3.16035 6.66602 5.0013C6.66602 6.84225 8.1584 8.33464 9.99935 8.33464Z"
      stroke="#242639"
      strokeWidth="1.5"
    />
    <path
      d="M16.6647 15.0026C16.6658 14.8659 16.6663 14.727 16.6663 14.5859C16.6663 12.5151 13.6813 10.8359 9.99967 10.8359C6.31801 10.8359 3.33301 12.5151 3.33301 14.5859C3.33301 16.6568 3.33301 18.3359 9.99967 18.3359C11.8588 18.3359 13.1997 18.2051 14.1663 17.9718"
      stroke="#242639"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default ExecutiveViewIcon;
