import React from "react";
import { viewSizeCalculator } from "../utils";

const TableIcon = ({
  width = viewSizeCalculator(26, true),
  height = viewSizeCalculator(26, true),
  isOpen = false,
}) => {
  return (
    <svg
      width={width}
      height={height}
      style={{ marginLeft: viewSizeCalculator(8, true) }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.7148 12.0001H9.71484M17.7148 16.5716H9.71484M17.7148 7.42871H9.71484"
        stroke={isOpen ? "#707070" : "#333333"}
        stroke-width="1.14286"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.28625 8.57185C6.85767 8.57185 7.4291 8.00042 7.4291 7.42899C7.4291 6.85756 6.85767 6.28613 6.28625 6.28613C5.71482 6.28613 5.14453 6.85756 5.14453 7.42899C5.14453 8.00042 5.71482 8.57185 6.28625 8.57185ZM6.28625 13.1433C6.85767 13.1433 7.4291 12.5718 7.4291 12.0004C7.4291 11.429 6.85767 10.8576 6.28625 10.8576C5.71482 10.8576 5.14453 11.429 5.14453 12.0004C5.14453 12.5718 5.71482 13.1433 6.28625 13.1433ZM6.28625 17.7147C6.85767 17.7147 7.4291 17.1433 7.4291 16.5718C7.4291 16.0004 6.85767 15.429 6.28625 15.429C5.71482 15.429 5.14453 16.0004 5.14453 16.5718C5.14453 17.1433 5.71482 17.7147 6.28625 17.7147Z"
        fill={isOpen ? "#333333" : "#707070"}
      />
    </svg>
  );
};

export default TableIcon;
