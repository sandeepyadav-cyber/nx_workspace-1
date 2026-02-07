import React from "react";
import type { IconProps } from "./IconProps";

/** Minimal placeholder icon - replace with real SVG when needed */
export const PlaceholderIcon: React.FC<IconProps & { name?: string }> = ({
  width = 20,
  height = 20,
  name = "Icon",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-placeholder={name}
  >
    <rect
      x="2"
      y="2"
      width="16"
      height="16"
      rx="2"
      stroke="#707C8B"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);
