import React from "react";
import type { IconProps } from "./IconProps";

const HamBurgerIcon: React.FC<IconProps> = ({
  width = "24",
  height = "25",
  color = "#E20175",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 25"
    fill="none"
  >
    <g clipPath="url(#clip0_19198_96719)">
      <rect
        width={width}
        height={Number(height) - 1}
        transform="translate(0 0.75)"
        fill="white"
      />
      <path
        d="M2 20.75H22V18.0833H2V20.75ZM2 14.0833H22V11.4167H2V14.0833ZM2 4.75V7.41667H22V4.75H2Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_19198_96719">
        <rect
          width={width}
          height={Number(height) - 1}
          fill="white"
          transform="translate(0 0.75)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default HamBurgerIcon;
