import React from 'react';

const SaveIcon = ({ height = 18, width = 18, color = '#43A047' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 48 48"
  >
    <path
      fill={color}
      d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"
    />
  </svg>
);

export default SaveIcon;
