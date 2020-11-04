import React from "react";

const AlignJustifyIcon = ({size, color, className, style, weight, viewBox}) => {
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
        d="M14 6.66667H2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M14 4H2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M14 9.33333H2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M14 12H2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

AlignJustifyIcon.defaultProps = {
  size: 24,
  weight: 1,
  color: "#666666",
  viewBox: "0 0 16 16",
  style: {},
  className: "",
};

export default AlignJustifyIcon;
