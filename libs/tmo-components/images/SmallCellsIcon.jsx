import React from "react";
import { viewSizeCalculator } from "../utils";

const SmallCellsIcon = ({ expanded }) => {
  const width = expanded ? viewSizeCalculator(2.8) : viewSizeCalculator(3.8125);
  const height = expanded
    ? viewSizeCalculator(2.8)
    : viewSizeCalculator(3.8125);
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.6654 16.9167H21.332C16.1612 16.9167 15.082 17.9959 15.082 23.1667V46.0834H35.9154V23.1667C35.9154 17.9959 34.8362 16.9167 29.6654 16.9167Z"
        stroke="white"
        stroke-width="3.125"
        stroke-linejoin="round"
      />
      <path
        d="M23.416 25.2501H27.5827M23.416 31.5001H27.5827M23.416 37.7501H27.5827M44.2494 46.0834V17.3043C44.2494 14.7439 44.2494 13.4647 43.6264 12.4376C43.0056 11.4084 41.8848 10.8355 39.6431 9.69178L30.5973 5.07303C28.1806 3.8397 27.5827 4.27511 27.5827 6.97928V16.3001M6.74935 46.0834V27.3334C6.74935 25.6105 7.10977 25.2501 8.83268 25.2501H15.0827M46.3327 46.0834H4.66602"
        stroke="white"
        stroke-width="3.125"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SmallCellsIcon;
