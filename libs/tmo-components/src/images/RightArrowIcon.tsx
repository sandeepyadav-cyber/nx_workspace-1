import React from "react";
import type { IconProps } from "./IconProps";

export type RightArrowIconType = "type1" | "type3" | "type4" | "type2";

interface RightArrowIconProps extends IconProps {
  type?: RightArrowIconType;
}

const RightArrowIcon: React.FC<RightArrowIconProps> = ({
  width = 7,
  height = 10,
  color = "#8693A4",
  type = "type1",
}) => {
  const pathD =
    type === "type1" || type === "type3"
      ? "M1.5 9L5.5 5L1.5 1"
      : "M12.4141 19.5L17.5865 14.5L12.4141 9.5";
  const path = (
    <path
      d={pathD}
      stroke={color ?? "#606080"}
      strokeWidth="1.2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  );
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
          {path}
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
        <rect width="30" height="30" rx="15" fill="white" />
        {path}
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
      style={type === "type3" ? { width, height } : undefined}
    >
      {path}
    </svg>
  );
};

export default RightArrowIcon;
