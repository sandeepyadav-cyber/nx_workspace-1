import React, { useState } from "react";
import { viewSizeCalculator } from "../utils";

const CrossQueryIcon = ({
  width = viewSizeCalculator(1.5625),
  height = viewSizeCalculator(1.5625),
  color = "#606080",
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <path
        d="M12.2109 12.3516L5.21094 19.3516M12.2109 12.3516L19.2109 5.35156M12.2109 12.3516L5.21094 5.35156M12.2109 12.3516L19.2109 19.3516"
        stroke={hovered ? "#ED0295" : color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CrossQueryIcon;
