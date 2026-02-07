import React from "react";
import styled from "styled-components";
import { viewSizeCalculator } from "../utils";

const SearchIcon = ({ width = 14, height = 14, color = "#0C0C0C" }) => {
  const iconSize = viewSizeCalculator(width, true);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize}
      height={iconSize}
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M6.51107 11.6491C9.45659 11.6491 11.8444 9.26127 11.8444 6.31575C11.8444 3.37024 9.45659 0.982422 6.51107 0.982422C3.56555 0.982422 1.17773 3.37024 1.17773 6.31575C1.17773 9.26127 3.56555 11.6491 6.51107 11.6491Z"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.1773 12.984L10.2773 10.084"
        stroke={color}
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
