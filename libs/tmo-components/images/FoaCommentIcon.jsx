import React, { useState } from "react";
import { viewSizeCalculator } from "../utils";

const FoaCommentIcon = ({
  width = viewSizeCalculator(1.25),
  height = viewSizeCalculator(1.25),
  color = "#606080",
  hoverColor = "#ED0295",
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width={width}
      height={height}
      style={{ cursor: "pointer" }}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <path
        d="M9.99973 17.5C11.6355 17.4996 13.2263 16.9645 14.5297 15.9761C15.8331 14.9877 16.7777 13.6003 17.2194 12.0253C17.6611 10.4503 17.5758 8.7741 16.9765 7.25208C16.3772 5.73005 15.2967 4.4457 13.8997 3.59474C12.5027 2.74379 10.8657 2.37289 9.23837 2.53858C7.61101 2.70427 6.08244 3.39746 4.88559 4.5125C3.68875 5.62755 2.88926 7.10331 2.60898 8.7149C2.32869 10.3265 2.58297 11.9855 3.33306 13.4392L2.49973 17.5L6.56056 16.6667C7.59056 17.1992 8.76056 17.5 9.99973 17.5Z"
        stroke={hovered ? hoverColor : color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.25 10H6.25833V10.0083H6.25V10ZM10 10H10.0083V10.0083H10V10ZM13.75 10H13.7583V10.0083H13.75V10Z"
        stroke={hovered ? hoverColor : color}
        strokeWidth="1.875"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FoaCommentIcon;
