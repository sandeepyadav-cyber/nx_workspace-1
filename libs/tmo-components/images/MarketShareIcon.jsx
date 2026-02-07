import React from "react";
import { viewSizeCalculator } from "../utils";
const MarketShareIcon = ({
  width = viewSizeCalculator(1.25),
  height = viewSizeCalculator(1.25),
  color = "#242639",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.666 12.9626C16.1754 14.521 15.2006 15.8823 13.8833 16.8486C12.566 17.815 10.9748 18.336 9.34102 18.3359C7.30548 18.3359 5.35331 17.5273 3.91397 16.088C2.47463 14.6486 1.66602 12.6965 1.66602 10.6609C1.66597 9.02717 2.18699 7.43598 3.15334 6.11864C4.11968 4.80131 5.48098 3.82651 7.03935 3.33594"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M18.2602 8.29045C17.8217 6.72861 16.989 5.3058 15.8419 4.15873C14.6948 3.01165 13.272 2.17888 11.7102 1.74045C10.3402 1.35795 9.16602 2.54628 9.16602 3.96795V9.54628C9.16602 10.2571 9.74268 10.8338 10.4535 10.8338H16.0318C17.4543 10.8338 18.6427 9.65961 18.2602 8.29045Z"
        stroke={color}
        strokeWidth="1.25"
      />
    </svg>
  );
};

export default MarketShareIcon;
