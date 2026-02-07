import React from "react";
import { viewHeightCalculator, viewSizeCalculator } from "../utils";

const ExecutiveSkeletonIcon = ({ width = viewSizeCalculator(44, true), height = viewHeightCalculator(33, true) }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 44 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect x="2" y="4.5" width="11.1568" height="6" rx="1.5" fill="#F9C74F" />
        <rect x="16.1562" y="4.5" width="11.1568" height="6" rx="1.5" fill="#D9D9D9" />
        <rect x="30.3145" y="4.5" width="11.1568" height="6" rx="1.5" fill="#90BE6D" />

        <rect x="2" y="13.5" width="11.1568" height="6" rx="1.5" fill="#90BE6D" />
        <rect x="16.1562" y="13.5" width="11.1568" height="6" rx="1.5" fill="#FA6262" />
        <rect x="30.3145" y="13.5" width="11.1568" height="6" rx="1.5" fill="#D9D9D9" />

        <rect x="2" y="22.5" width="11.1568" height="6" rx="1.5" fill="#D9D9D9" />
        <rect x="16.1562" y="22.5" width="11.1568" height="6" rx="1.5" fill="#D9D9D9" />
        <rect x="30.3145" y="22.5" width="11.1568" height="6" rx="1.5" fill="#43AA8B" />
    </svg>
);


export default ExecutiveSkeletonIcon;
