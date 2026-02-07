import React from "react";
import { viewSizeCalculator } from "../utils";

const LineDividerIcon = ({
  width = viewSizeCalculator(1, true),
  height = viewSizeCalculator(20, true),
  color = "#D6D6D6",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.444133"
        y1="1.94137e-08"
        x2="0.444132"
        y2="20"
        stroke={color}
        stroke-width="0.888266"
      />
    </svg>
  );
};

export default LineDividerIcon;
