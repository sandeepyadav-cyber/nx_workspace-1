import React from "react";

const iconfilter = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.width || "16"}
      height={props?.height || "16"}
      viewBox="0 0 16 16"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M14.1128 2.5H1.89062L6.77951 8.28111V12.2778L9.22396 13.5V8.28111L14.1128 2.5Z"
        fill={props?.color || "#fff"}
      />
    </svg>
  );
};

export default iconfilter;
