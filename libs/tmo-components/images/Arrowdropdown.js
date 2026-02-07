import React from "react";
import { viewSizeCalculator } from "../utils";

const Arrowdropdown = ({
  width = "12",
  height = "12",
  isPositive = true,
  color = "#242639",
}) => {
  const arrowStyle = {
    transform: isPositive ? "rotateX(0deg)" : "rotateX(180deg)",
    transition: "transform 0.3s ease",
  };
  return (
    <svg
      width={viewSizeCalculator(width, true)}
      height={viewSizeCalculator(height, true)}
      viewBox="0 0 12 12"
      style={arrowStyle}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.400239 1.09034C0.556512 0.934119 0.768435 0.846356 0.989405 0.846356C1.21038 0.846356 1.4223 0.934119 1.57857 1.09034L5.98941 5.50118L10.4002 1.09034C10.4771 1.01075 10.5691 0.947267 10.6707 0.903593C10.7724 0.859919 10.8818 0.83693 10.9924 0.835969C11.1031 0.835007 11.2128 0.856093 11.3152 0.897994C11.4176 0.939894 11.5107 1.00177 11.5889 1.08002C11.6671 1.15826 11.729 1.2513 11.7709 1.35372C11.8128 1.45613 11.8339 1.56586 11.8329 1.67651C11.832 1.78716 11.809 1.89651 11.7653 1.99818C11.7216 2.09985 11.6582 2.19181 11.5786 2.26868L6.57857 7.26868C6.4223 7.4249 6.21038 7.51267 5.98941 7.51267C5.76844 7.51267 5.55651 7.4249 5.40024 7.26868L0.400239 2.26868C0.244013 2.1124 0.15625 1.90048 0.15625 1.67951C0.15625 1.45854 0.244013 1.24662 0.400239 1.09034Z"
        fill={color}
      />
    </svg>
  );
};

export default Arrowdropdown;
