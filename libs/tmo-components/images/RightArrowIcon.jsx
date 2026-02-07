import React from "react";
import PropTypes from "prop-types";

const RightArrowIcon = ({ width, height, color, type = "type1" }) => {
  return (
    <>
      {type === "type1" ? (
        <svg
          width={width || 7}
          height={height || 10}
          viewBox="0 0 7 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 9L5.5 5L1.5 1"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      ) : type === "type3" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width, height }}
          viewBox="0 0 7 10"
          fill="none"
        >
          <path
            d="M1.5 9L5.5 5L1.5 1"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      ) : type === "type4" ? ( // New type with box shadow
        <div style={{
          // width: width || 30,
          // height: height || 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
          backgroundColor: "white"
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M12.4141 19.5L17.5865 14.5L12.4141 9.5"
              stroke={color || "#606080"}
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <rect width="30" height="30" rx="15" fill="white" />
          <path
            d="M12.4141 19.5L17.5865 14.5L12.4141 9.5"
            stroke={color || "#606080"}
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};

RightArrowIcon.defaultProps = {
  width: 7,
  height: 10,
  color: "#8693A4",
};

export default RightArrowIcon;
