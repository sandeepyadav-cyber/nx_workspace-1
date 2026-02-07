import React from "react";

const Warning2 = ({ width = 28, height = 26, color = "#E20074" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 28 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.0017 10.4999L14.0017 15.4999M1.59771 20.0012C0.443048 22.0012 1.88705 24.4999 4.19505 24.4999L23.8084 24.4999C26.115 24.4999 27.559 22.0012 26.4057 20.0012L16.6004 3.00391C15.4457 1.00391 12.5577 1.00391 11.403 3.00391L1.59771 20.0012ZM14.0017 19.4999H14.011V19.5106H14.0017V19.4999Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Warning2;
