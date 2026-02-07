import React from "react";
import { viewSizeCalculator } from "../utils";

const reduceOpacity = (hex, percent = 20) => {
  // Convert hex to RGBA with reduced opacity
  const opacity = percent / 100;

  // Remove # if present
  hex = hex.replace("#", "");

  // Parse into r, g, b
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const StatusIcon = ({
  status = "invalid",
  size = viewSizeCalculator(16, true),
  // color = "#27C365",
}) => {
  const isValid = status === "valid";

  // Stroke color = main color
  const strokeColor = isValid ? "#27C365" : "#FA6262";

  // Fill color = 20% opacity version of stroke
  const fillColor = reduceOpacity(strokeColor, 20);

  return (
    <>
      {isValid ? (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.65625 14.6562C8.57567 14.6574 9.48625 14.4768 10.3357 14.125C11.1851 13.7731 11.9566 13.2569 12.6059 12.6059C13.2569 11.9566 13.7731 11.1851 14.125 10.3357C14.4768 9.48625 14.6574 8.57567 14.6562 7.65625C14.6574 6.73683 14.4768 5.82625 14.125 4.97682C13.7731 4.1274 13.2569 3.35586 12.6059 2.70655C11.9566 2.05561 11.1851 1.53938 10.3357 1.18753C9.48625 0.835669 8.57567 0.655122 7.65625 0.656255C6.73683 0.655122 5.82625 0.835669 4.97682 1.18753C4.1274 1.53938 3.35586 2.05561 2.70655 2.70655C2.05561 3.35586 1.53938 4.1274 1.18753 4.97682C0.835669 5.82625 0.655122 6.73683 0.656255 7.65625C0.655122 8.57567 0.835669 9.48625 1.18753 10.3357C1.53938 11.1851 2.05561 11.9566 2.70655 12.6059C3.35586 13.2569 4.1274 13.7731 4.97682 14.125C5.82625 14.4768 6.73683 14.6574 7.65625 14.6562Z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth="1.3125"
            strokeLinejoin="round"
          />
          <path
            d="M4.85547 7.65859L6.95547 9.75859L11.1555 5.55859"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.65625 14.6562C8.57567 14.6574 9.48625 14.4768 10.3357 14.125C11.1851 13.7731 11.9566 13.2569 12.6059 12.6059C13.2569 11.9566 13.7731 11.1851 14.125 10.3357C14.4768 9.48625 14.6574 8.57567 14.6562 7.65625C14.6574 6.73683 14.4768 5.82625 14.125 4.97682C13.7731 4.1274 13.2569 3.35586 12.6059 2.70655C11.9566 2.05561 11.1851 1.53938 10.3357 1.18753C9.48625 0.835669 8.57567 0.655122 7.65625 0.656255C6.73683 0.655122 5.82625 0.835669 4.97682 1.18753C4.1274 1.53938 3.35586 2.05561 2.70655 2.70655C2.05561 3.35586 1.53938 4.1274 1.18753 4.97682C0.835669 5.82625 0.655122 6.73683 0.656255 7.65625C0.655122 8.57567 0.835669 9.48625 1.18753 10.3357C1.53938 11.1851 2.05561 11.9566 2.70655 12.6059C3.35586 13.2569 4.1274 13.7731 4.97682 14.125C5.82625 14.4768 6.73683 14.6574 7.65625 14.6562Z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth="1.3125"
            strokeLinejoin="round"
          />
          <path
            d="M9.65625 5.65625L5.65625 9.65625"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.65625 5.65625L9.65625 9.65625"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};
export default StatusIcon;
