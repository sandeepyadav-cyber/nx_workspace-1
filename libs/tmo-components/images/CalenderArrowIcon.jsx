import React from "react";
import { viewSizeCalculator } from "../utils";

const CalenderArrowIcon = ({
  width = viewSizeCalculator(7, true),
  height = viewSizeCalculator(12, true),
  direction = "left", // "left" | "right"
  disabled = false,
  color = "#E20074",
}) => {
  const rotation = direction === "right" ? "rotate(180deg)" : "rotate(0deg)";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: rotation,
        transition: "transform 0.3s ease",
      }}
    >
      <path
        d="M6.42235 0.243989C6.57858 0.400262 6.66634 0.612185 6.66634 0.833155C6.66634 1.05413 6.57858 1.26605 6.42235 1.42232L2.01152 5.83315L6.42235 10.244C6.50194 10.3209 6.56543 10.4128 6.6091 10.5145C6.65278 10.6162 6.67576 10.7255 6.67673 10.8362C6.67769 10.9468 6.6566 11.0565 6.6147 11.1589C6.5728 11.2614 6.51092 11.3544 6.43268 11.4327C6.35444 11.5109 6.26139 11.5728 6.15898 11.6147C6.05656 11.6566 5.94683 11.6777 5.83618 11.6767C5.72553 11.6757 5.61618 11.6527 5.51451 11.6091C5.41284 11.5654 5.32089 11.5019 5.24402 11.4223L0.244016 6.42232C0.0877902 6.26605 2.78688e-05 6.05413 2.78784e-05 5.83315C2.78881e-05 5.61218 0.0877903 5.40026 0.244016 5.24399L5.24402 0.243989C5.40029 0.0877629 5.61221 -4.65327e-08 5.83318 -3.68738e-08C6.05415 -2.72149e-08 6.26608 0.0877629 6.42235 0.243989Z"
        // fill={disabled ? "#ccc" : "#E20074"}
        fill={color}
        opacity={disabled ? 0.6 : 1}
      />
    </svg>
  );
};

export default CalenderArrowIcon;
