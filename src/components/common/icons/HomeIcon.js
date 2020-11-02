import React from "react";

const HomeIcon = ({size, color, className, style, weight, viewBox}) => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 6L8 1.33333L14 6V13.3333C14 14.0697 13.403 14.6667 12.6667 14.6667H3.33333C2.59695 14.6667 2 14.0697 2 13.3333V6Z"
        stroke={color}
        stroke-width={weight}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 14.6667V8H10V14.6667"
        stroke={color}
        stroke-width={weight}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

HomeIcon.defaultProps = {
  size: 24,
  weight: 1,
  color: "#666666",
  viewBox: "0 0 16 16",
  style: {},
  className: "",
};

export default HomeIcon;
