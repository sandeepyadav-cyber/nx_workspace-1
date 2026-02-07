import React, { useState } from "react";

const DownloadIcon = ({
  width = "16",
  height = "15",
  color = "#606080",
  hoverColor = "#1e1e1f",
  disabledHoverEffect = false, // optional prop to disable hover effect
}) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!disabledHoverEffect) setHovered(true);
  };

  const handleMouseLeave = () => {
    if (!disabledHoverEffect) setHovered(false);
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: "pointer" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <path
        d="M14.668 10.8367V11.6667C14.668 12.3297 14.4046 12.9656 13.9357 13.4344C13.4669 13.9033 12.831 14.1667 12.168 14.1667L3.83464 14.1667C3.17159 14.1667 2.53571 13.9033 2.06687 13.4344C1.59803 12.9656 1.33464 12.3297 1.33464 11.6667V10.8333M8.0013 1.25V10.4167M8.0013 10.4167L5.08464 7.5M8.0013 10.4167L10.918 7.5"
        stroke={hovered ? hoverColor : color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownloadIcon;
