import React from "react";

const LockIcon = ({size, color, className, style, weight, viewBox}) => {
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
        d="M2 9.33335C2 8.22878 2.89543 7.33334 4 7.33334H12C13.1046 7.33334 14 8.22877 14 9.33334V12.6667C14 13.7712 13.1046 14.6667 12 14.6667H4C2.89543 14.6667 2 13.7712 2 12.6667V9.33335Z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M4.66666 7.33334V4.66668C4.66666 2.82573 6.15904 1.33334 7.99999 1.33334C9.84094 1.33334 11.3333 2.82573 11.3333 4.66668V7.33334"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

LockIcon.defaultProps = {
  size: 24,
  weight: 1,
  color: "#666666",
  viewBox: "0 0 16 16",
  style: {},
  className: "",
};

export default LockIcon;
