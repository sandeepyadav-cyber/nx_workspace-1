import React from "react";
import { viewSizeCalculator } from "../utils";

const CrossIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={viewSizeCalculator(props.width) || 29.3}
      height={viewSizeCalculator(props.height) || 30}
      viewBox="0 0 29.3 30"
      fill="none"
    >
      <rect
        width={props.width || 29.3}
        height={props.height || 30}
        rx="8"
        fill="transparent"
        stroke="none"
        vectorEffect="non-scaling-stroke"
      />

      <path
        d="M15 15L10 20M15 15L20 10M15 15L10 10M15 15L20 20"
        stroke={props.stroke || "#E20074"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CrossIcon;
