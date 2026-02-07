import React from "react";

const IconExpand = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 29.3}
      height={props.height || 30}
      viewBox="0 0 29.3 30"
      fill="none"
    >
      <rect
        width={props.width || 29.3}
        height={props.height || 30}
        rx="8"
        // fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M11.2998 18.0176V17.9464V13.668H10.0938V20.004H16.4298V18.798H12.1513H11.2998V18.0176Z"
        fill="white"
      />
      <path
        d="M18.7705 12.1074L18.7705 12.1786L18.7705 16.457L19.9766 16.457L19.9766 10.121L13.6405 10.121L13.6405 11.327L17.919 11.327L18.7705 11.327L18.7705 12.1074Z"
        fill="white"
      />
    </svg>
  );
};

export default IconExpand;
