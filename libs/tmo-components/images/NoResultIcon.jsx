import React, { useState } from "react";
import { viewSizeCalculator } from "../utils";

const NoResultIcon = ({
  width = viewSizeCalculator(1.0625),
  height = viewSizeCalculator(1.125),
  color = "#606080",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 6.5V9.625M16 9C16 9.98491 15.806 10.9602 15.4291 11.8701C15.0522 12.7801 14.4997 13.6069 13.8033 14.3033C13.1069 14.9997 12.2801 15.5522 11.3701 15.9291C10.4602 16.306 9.48491 16.5 8.5 16.5C7.51509 16.5 6.53982 16.306 5.62987 15.9291C4.71993 15.5522 3.89314 14.9997 3.1967 14.3033C2.50026 13.6069 1.94781 12.7801 1.5709 11.8701C1.19399 10.9602 1 9.98491 1 9C1 7.01088 1.79018 5.10322 3.1967 3.6967C4.60322 2.29018 6.51088 1.5 8.5 1.5C10.4891 1.5 12.3968 2.29018 13.8033 3.6967C15.2098 5.10322 16 7.01088 16 9ZM8.5 12.125H8.50667V12.1317H8.5V12.125Z"
        stroke={color}
        stroke-width="1.4553"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default NoResultIcon;
