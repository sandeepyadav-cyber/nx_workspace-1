import React from "react";
import { viewSizeCalculator } from "../utils";

const GisIcon = () => {
  return (
    <svg
      width={viewSizeCalculator(20,true)}
      height={viewSizeCalculator(20,true)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5391 6.46702C14.475 7.40445 15.0006 8.67492 15.0006 9.99952C15.0006 11.3241 14.475 12.5946 13.5391 13.532M15.8958 4.11035C17.4565 5.67288 18.3332 7.79104 18.3332 9.99952C18.3332 12.208 17.4565 14.3262 15.8958 15.8887M4.10414 15.8887C2.54341 14.3262 1.66675 12.208 1.66675 9.99952C1.66675 7.79104 2.54341 5.67288 4.10414 4.11035M6.4608 13.532C5.52498 12.5946 4.99937 11.3241 4.99937 9.99952C4.99937 8.67492 5.52498 7.40445 6.4608 6.46702"
        stroke="#242639"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99998 11.6663C10.9205 11.6663 11.6666 10.9201 11.6666 9.99967C11.6666 9.0792 10.9205 8.33301 9.99998 8.33301C9.07951 8.33301 8.33331 9.0792 8.33331 9.99967C8.33331 10.9201 9.07951 11.6663 9.99998 11.6663Z"
        stroke="#242639"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default GisIcon;
