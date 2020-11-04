import React from "react";

const RepeatIcon = ({size, color, className, style, weight, viewBox}) => {
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
        d="M18.4167 1.08333L22.75 5.41666L18.4167 9.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M3.25 11.9167V9.75001C3.25 7.35677 5.1901 5.41667 7.58333 5.41667H22.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M7.58333 24.9167L3.25 20.5833L7.58333 16.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M22.75 14.0833V16.25C22.75 18.6432 20.8099 20.5833 18.4167 20.5833H3.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

RepeatIcon.defaultProps = {
  size: 26,
  weight: 2,
  color: "white",
  viewBox: "0 0 26 26",
  style: {},
  className: "",
};

export default RepeatIcon;
