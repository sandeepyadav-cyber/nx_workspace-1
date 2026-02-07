import React from "react";
import type { IconProps } from "./IconProps";

export type LeftArrowIconType = "type1" | "type4" | "type2";

interface LeftArrowIconProps extends IconProps {
  type?: LeftArrowIconType;
}

const LeftArrowIcon: React.FC<LeftArrowIconProps> = ({
  width = 7,
  height = 10,
  color = "#8693A4",
  type = "type1",
}) => {
  if (type === "type4") {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
          backgroundColor: "white",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M17.5859 10.5L12.4135 15.5L17.5859 20.5"
            stroke={color ?? "#606080"}
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
  if (type === "type2") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <rect
          x="30"
          y="30"
          width="30"
          height="30"
          rx="15"
          transform="rotate(-180 30 30)"
          fill="white"
        />
        <path
          d="M17.5859 10.5L12.4135 15.5L17.5859 20.5"
          stroke={color ?? "#606080"}
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 7 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 1L1.5 5L5.5 9"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LeftArrowIcon;
