import React from "react";

const ChevronRightIcon = ({size, color, className, style, weight, viewBox}) => {
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
        d="M5.625 11.25L9.375 7.5L5.625 3.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

ChevronRightIcon.defaultProps = {
  size: 15,
  weight: 1,
  color: "#666666",
  viewBox: "0 0 15 15",
  style: {},
  className: "",
};

export default ChevronRightIcon;
