import React from "react";
import { viewSizeCalculator } from "../utils";

const ResetFilterIcon = ({
  width = viewSizeCalculator(17, true),
  height = viewSizeCalculator(16, true),
  color = "#E20074",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_31652_72626)">
        <path
          d="M1.01953 2.66406V6.66406H5.01953"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.69286 10.0016C3.12513 11.2285 3.94442 12.2817 5.0273 13.0025C6.11018 13.7233 7.39799 14.0727 8.69668 13.9979C9.99536 13.9232 11.2346 13.4284 12.2276 12.5881C13.2207 11.7478 13.9137 10.6076 14.2023 9.33917C14.491 8.07076 14.3596 6.7429 13.8279 5.55566C13.2963 4.36842 12.3932 3.38612 11.2548 2.75677C10.1163 2.12742 8.80413 1.8851 7.51598 2.06634C6.22783 2.24757 5.03347 2.84254 4.11286 3.76159L1.01953 6.66826"
          stroke="#E20074"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_31652_72626">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.351562)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ResetFilterIcon;
