import React from "react";
import type { IconProps } from "./IconProps";
import { viewSizeCalculator } from "../utils";

const Querytoolicon: React.FC<IconProps> = ({
  width = viewSizeCalculator(20, true),
  height = viewSizeCalculator(20, true),
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="9" cy="9" r="6" stroke="#242639" strokeWidth="1.5" />
    <path d="M14 14l4 4" stroke="#242639" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default Querytoolicon;
