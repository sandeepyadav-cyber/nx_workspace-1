import React, { useState } from "react";

const InfoIcon = ({
  width = "17px",
  height = "17px",
  color = "#2965DA",
  hoverColor = "#ED0295",
  disabledHoverEffect = false, // The new prop to disable hover effects
}) => {
  const [hovered, setHovered] = useState(false);
  
  const handleMouseEnter = () => {
    if (!disabledHoverEffect) {
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!disabledHoverEffect) {
      setHovered(false);
    }
  };

  return (
    <svg
      style={{ width, height, cursor: "pointer" }}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <path
        d="M8.472 0.0546875C3.87201 0.0546875 0.138672 3.78802 0.138672 8.38802C0.138672 12.988 3.87201 16.7214 8.472 16.7214C13.072 16.7214 16.8053 12.988 16.8053 8.38802C16.8053 3.78802 13.072 0.0546875 8.472 0.0546875ZM9.30534 12.5547H7.63867V7.55469H9.30534V12.5547ZM9.30534 5.88802H7.63867V4.22135H9.30534V5.88802Z"
        fill={hovered ? hoverColor : color}
      />
    </svg>
  );
};

export default InfoIcon;
