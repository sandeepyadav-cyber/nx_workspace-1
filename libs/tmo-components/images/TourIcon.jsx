import React from "react";

const TourIcon = ({ width = 24, height = 24, color = "#333333" ,strokeWidth = 1.5}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3C19.2973 3 21 4.7027 21 12C21 19.2973 19.2973 21 12 21C4.7027 21 3 19.2973 3 12C3 4.7027 4.7027 3 12 3Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.38517 12C8.38517 6.81199 8.25317 6.88799 12.7467 9.48199C17.2402 12.076 17.2397 11.924 12.7467 14.518C8.25367 17.112 8.38517 17.188 8.38517 12Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default TourIcon;
