import React from "react";
import { viewSizeCalculator } from "../utils";

const Dustbinicon = ({
  width = `${viewSizeCalculator(24, true)}`,
  height = `${viewSizeCalculator(25, true)}`,
  color = "currentColor",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_33875_73459)">
        <path
          d="M19.3139 7.87005H5M17.9103 9.97504L17.523 15.7848C17.374 18.0195 17.2999 19.1368 16.5716 19.818C15.8432 20.4992 14.7225 20.5 12.4828 20.5H11.8311C9.59141 20.5 8.47071 20.5 7.74238 19.818C7.01406 19.1368 6.93912 18.0195 6.79093 15.7848L6.40361 9.97504M9.77412 6.18606C9.94808 5.69304 10.2707 5.26612 10.6975 4.96414C11.1242 4.66217 11.6342 4.5 12.157 4.5C12.6798 4.5 13.1897 4.66217 13.6165 4.96414C14.0433 5.26612 14.3659 5.69304 14.5398 6.18606"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_33875_73459">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Dustbinicon;
