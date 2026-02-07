import React from "react";

const WarningIcon = ({ width = "16px", height = "14px", color = "#FF6363"}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00086 5.99995V8.49995M1.79886 10.7506C1.22152 11.7506 1.94352 13 3.09752 13H12.9042C14.0575 13 14.7795 11.7506 14.2029 10.7506L9.30019 2.25195C8.72286 1.25195 7.27886 1.25195 6.70152 2.25195L1.79886 10.7506ZM8.00086 10.5H8.00552V10.5053H8.00086V10.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WarningIcon;
