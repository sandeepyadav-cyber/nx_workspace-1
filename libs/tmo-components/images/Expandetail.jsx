import React from "react";
import { viewSizeCalculator } from "../utils";

function Expandetail({
  width = viewSizeCalculator(16, true),
  height = viewSizeCalculator(16, true),
  color = "#ed0295",
  strokeWidth = 0.948148,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.44531 3.33398H13.3341V7.22287"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.3338 9.85446V12.5007C13.3338 12.9609 12.9607 13.334 12.5005 13.334H4.1673C3.70708 13.334 3.33398 12.9609 3.33398 12.5007V4.16732C3.33398 3.70708 3.70708 3.33398 4.1673 3.33398H6.66726"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.83398 7.83399L13.0839 3.58398"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Expandetail;
