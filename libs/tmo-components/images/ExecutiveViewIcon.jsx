import React from "react";
import { viewSizeCalculator } from "../utils";

const ExecutiveViewIcon = ({
  width = viewSizeCalculator(1.25),
  height = viewSizeCalculator(1.25),
  color = "black",
}) => {
  return (
    // <svg
    //   width={width}
    //   height={height}
    //   viewBox="0 0 20 20"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M2.5 2.5L2.5 15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H17.5"
    //     stroke={color}
    //     stroke-width="1.66667"
    //     stroke-linecap="round"
    //     stroke-linejoin="round"
    //   />
    //   <path
    //     d="M15.834 7.5L11.6673 11.6667L8.33398 8.33333L5.83398 10.8333"
    //     stroke={color}
    //     stroke-width="1.66667"
    //     stroke-linecap="round"
    //     stroke-linejoin="round"
    //   />
    // </svg>
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 15.5H14"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M0.5 7.25C0.5 6.54275 0.5 6.1895 0.71975 5.96975C0.9395 5.75 1.29275 5.75 2 5.75C2.70725 5.75 3.0605 5.75 3.28025 5.96975C3.5 6.1895 3.5 6.54275 3.5 7.25V11.75C3.5 12.4573 3.5 12.8105 3.28025 13.0303C3.0605 13.25 2.70725 13.25 2 13.25C1.29275 13.25 0.9395 13.25 0.71975 13.0303C0.5 12.8105 0.5 12.4573 0.5 11.75V7.25ZM5.75 4.25C5.75 3.54275 5.75 3.1895 5.96975 2.96975C6.1895 2.75 6.54275 2.75 7.25 2.75C7.95725 2.75 8.3105 2.75 8.53025 2.96975C8.75 3.1895 8.75 3.54275 8.75 4.25V11.75C8.75 12.4573 8.75 12.8105 8.53025 13.0303C8.3105 13.25 7.95725 13.25 7.25 13.25C6.54275 13.25 6.1895 13.25 5.96975 13.0303C5.75 12.8105 5.75 12.4573 5.75 11.75V4.25ZM11 2C11 1.29275 11 0.9395 11.2198 0.71975C11.4395 0.5 11.7928 0.5 12.5 0.5C13.2073 0.5 13.5605 0.5 13.7803 0.71975C14 0.9395 14 1.29275 14 2V11.75C14 12.4573 14 12.8105 13.7803 13.0303C13.5605 13.25 13.2073 13.25 12.5 13.25C11.7928 13.25 11.4395 13.25 11.2198 13.0303C11 12.8105 11 12.4573 11 11.75V2Z"
        stroke={color}
      />
    </svg>
  );
};

export default ExecutiveViewIcon;
