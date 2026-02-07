import React from "react";
import { viewSizeCalculator } from "../utils";

const BlueHex = () => {
  return (
    <svg
      width={viewSizeCalculator(1.3125)}
      height={viewSizeCalculator(1.3125)}
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.19881 19.7071L0.663483 11.3962C0.262326 10.7939 0.265963 10.0086 0.672682 9.41001L6.19743 1.27924C6.52863 0.791805 7.0797 0.5 7.66901 0.5H12V10.4V20.5H7.67959C7.08444 20.5 6.52872 20.2024 6.19881 19.7071Z"
        fill="#675EF2"
        stroke="#675EF2"
        stroke-width="0.1789"
      />
      <path
        d="M17.8012 19.7071L23.3365 11.3962C23.7377 10.7939 23.734 10.0086 23.3273 9.41001L17.8026 1.27924C17.4714 0.791805 16.9203 0.5 16.331 0.5H12V10.4V20.5H16.3204C16.9156 20.5 17.4713 20.2024 17.8012 19.7071Z"
        fill="#675EF2"
        stroke="#675EF2"
        stroke-width="0.1789"
      />
    </svg>
  );
};

export default BlueHex;
