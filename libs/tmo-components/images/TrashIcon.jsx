import React from "react";
import { viewSizeCalculator } from "../utils";

const TrashIcon = ({
  width = viewSizeCalculator(20, true),
  height = viewSizeCalculator(20, true),
  color = "#FF4848",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 6.19879H4M14.8233 8.04066L14.4986 13.1242C14.3736 15.0795 14.3115 16.0572 13.7009 16.6532C13.0904 17.2493 12.1508 17.25 10.2732 17.25H9.72682C7.84918 17.25 6.90965 17.25 6.29906 16.6532C5.68847 16.0572 5.62565 15.0795 5.50141 13.1242L5.17671 8.04066M8.00235 4.7253C8.14819 4.29391 8.41864 3.92035 8.77642 3.65612C9.13421 3.39189 9.56171 3.25 10 3.25C10.4383 3.25 10.8658 3.39189 11.2236 3.65612C11.5814 3.92035 11.8518 4.29391 11.9976 4.7253"
        stroke={color}
        stroke-width="1.25"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default TrashIcon;
