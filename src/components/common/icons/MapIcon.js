import React from "react";

const MapIcon = ({size, color, className, style, weight, viewBox}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      style={style}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={color}
        stroke-width={weight}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.666656 4.00001V14.6667L5.33332 12L10.6667 14.6667L15.3333 12V1.33334L10.6667 4.00001L5.33332 1.33334L0.666656 4.00001V4.00001Z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M5.33334 1.33334V12"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M10.6667 4V14.6667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

MapIcon.defaultProps = {
  size: 24,
  weight: 1,
  color: "#666666",
  viewBox: "0 0 16 16",
  style: {},
  className: "",
};

export default MapIcon;
