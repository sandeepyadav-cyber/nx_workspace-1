import React from "react";

const Arrowicon = ({width,height}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 0.142879C10 0.0285892 9.92662 -0.0392876 9.87218 0.0246487L0.215372 11.3659C-0.0717877 11.7071 -0.0717878 12.4799 0.215372 12.8211L9.8727 23.976C9.92718 24.0389 10 23.9709 10 23.8571L10 22.4198C10 22.3726 9.98662 22.3286 9.96425 22.302L1.37211 12.0935L9.96425 1.88499C9.98662 1.85842 10 1.81433 10 1.76719L10 0.142879Z"
        fill="#606080"
      />
    </svg>
  );
};

export default Arrowicon;
