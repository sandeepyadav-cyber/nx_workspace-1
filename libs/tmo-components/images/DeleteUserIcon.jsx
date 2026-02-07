import React from "react";
import { viewSizeCalculator } from "../utils";

const DeleteUserIcon = () => {
  return (
    <svg
      width={viewSizeCalculator(24, true)}
      height={viewSizeCalculator(24, true)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_28693_106959)">
        <path
          d="M19.3139 7.37005H5M17.9103 9.47504L17.523 15.2848C17.374 17.5195 17.2999 18.6368 16.5716 19.318C15.8432 19.9992 14.7225 20 12.4828 20H11.8311C9.59141 20 8.47071 20 7.74238 19.318C7.01406 18.6368 6.93912 17.5195 6.79093 15.2848L6.40361 9.47504M9.77412 5.68606C9.94808 5.19304 10.2707 4.76612 10.6975 4.46414C11.1242 4.16217 11.6342 4 12.157 4C12.6798 4 13.1897 4.16217 13.6165 4.46414C14.0433 4.76612 14.3659 5.19304 14.5398 5.68606"
          stroke="#242639"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_28693_106959">
          <rect
            width={viewSizeCalculator(24, true)}
            height={viewSizeCalculator(24, true)}
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DeleteUserIcon;
