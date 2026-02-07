import React from "react";
import { viewSizeCalculator } from "../utils";

const NewCrossIcon = ({
  width = viewSizeCalculator(10, true),
  height = viewSizeCalculator(10, true),
  color = "#333333",
  strokeWidth = 1.69731,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.849609 8.84863L8.85187 0.848633M0.849609 0.848633L8.85187 8.84863"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
      />
    </svg>
  );
};

export default NewCrossIcon;
