import React from "react";
import { viewSizeCalculator } from "../utils";

const RejectSnackbarIcon = ({
  width = viewSizeCalculator(32, true),
  height = viewSizeCalculator(32, true),
  color = "#D32F2F",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="15.5"
        stroke={color}
        strokeOpacity="0.2"
      />
      <rect
        x="3.5"
        y="3.5"
        width="25"
        height="25"
        rx="12.5"
        stroke={color}
        strokeOpacity="0.5"
      />
      <path
        d="M20.2426 11.7574C20.5858 12.1005 20.5858 12.6495 20.2426 12.9926L17.2353 16L20.2426 19.0074C20.5858 19.3505 20.5858 19.8995 20.2426 20.2426C19.8995 20.5858 19.3505 20.5858 19.0074 20.2426L16 17.2353L12.9926 20.2426C12.6495 20.5858 12.1005 20.5858 11.7574 20.2426C11.4142 19.8995 11.4142 19.3505 11.7574 19.0074L14.7647 16L11.7574 12.9926C11.4142 12.6495 11.4142 12.1005 11.7574 11.7574C12.1005 11.4142 12.6495 11.4142 12.9926 11.7574L16 14.7647L19.0074 11.7574C19.3505 11.4142 19.8995 11.4142 20.2426 11.7574Z"
        fill={color}
      />
    </svg>
  );
};

export default RejectSnackbarIcon;
