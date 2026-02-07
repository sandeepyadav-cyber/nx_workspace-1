import React from 'react';

const NoCommentsIcon = ({ width = 31, height = 31, color = '#606080' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_18145_106669"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="1"
      y="3"
      width="28"
      height="25"
    >
      <path
        d="M20.7148 24.6406H13.8398V19.6406H22.5898V14.6406H27.5898V24.6406H24.4648L22.5898 26.5156L20.7148 24.6406Z"
        fill="black"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.58984 4.64062H22.5898V19.6406H10.7148L8.21484 22.1406L5.71484 19.6406H2.58984V4.64062Z"
        fill="black"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.58984 14.6406H11.3398H7.58984ZM7.58984 9.64062H15.0898H7.58984Z"
        fill="black"
      />
      <path
        d="M7.58984 14.6406H11.3398M7.58984 9.64062H15.0898"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </mask>
    <g mask="url(#mask0_18145_106669)">
      <path
        d="M0.0898438 0.890625H30.0898V30.8906H0.0898438V0.890625Z"
        fill={color}
      />
    </g>
  </svg>
);

export default NoCommentsIcon;
