import React from "react";
import { viewSizeCalculator } from "../utils";
import type { IconProps } from "./IconProps";

const AdminConsoleIcon: React.FC<IconProps> = ({
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
    <path
      d="M15.0013 6.66536V4.9987C15.0013 4.55667 14.8257 4.13275 14.5131 3.82019C14.2006 3.50763 13.7767 3.33203 13.3346 3.33203H3.33464C2.89261 3.33203 2.46868 3.50763 2.15612 3.82019C1.84356 4.13275 1.66797 4.55667 1.66797 4.9987V10.832C1.66797 11.2741 1.84356 11.698 2.15612 12.0105C2.46868 12.3231 2.89261 12.4987 3.33464 12.4987H10.0013M8.33464 15.832V12.532V15.157M5.83464 15.832H10.0013"
      stroke="#242639"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.6693 10H15.0026C14.0821 10 13.3359 10.7462 13.3359 11.6667V16.6667C13.3359 17.5871 14.0821 18.3333 15.0026 18.3333H16.6693C17.5897 18.3333 18.3359 17.5871 18.3359 16.6667V11.6667C18.3359 10.7462 17.5897 10 16.6693 10Z"
      stroke="#242639"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default AdminConsoleIcon;
