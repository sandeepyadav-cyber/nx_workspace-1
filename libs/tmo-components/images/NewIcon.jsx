import React from "react";
import { viewSizeCalculator } from "../../Pages/utils";

const NewIcon = ({
  width = viewSizeCalculator(16, true),
  height = viewSizeCalculator(16, true),
  color = "#559AEC",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.66603 13.8511C6.08594 13.7189 5.52873 13.5012 5.0127 13.2051M9.3327 2.14844C10.6581 2.45115 11.8415 3.1949 12.6891 4.25791C13.5367 5.32092 13.9983 6.64021 13.9983 7.99977C13.9983 9.35934 13.5367 10.6786 12.6891 11.7416C11.8415 12.8046 10.6581 13.5484 9.3327 13.8511M3.05203 11.3951C2.68876 10.8665 2.41259 10.2831 2.23403 9.6671M2.08203 6.99977C2.1887 6.36644 2.39403 5.76644 2.68203 5.21644L2.7947 5.0131M4.60403 3.05244C5.22816 2.62369 5.92781 2.31696 6.66603 2.14844"
      stroke={color}
      stroke-width="1.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default NewIcon;
