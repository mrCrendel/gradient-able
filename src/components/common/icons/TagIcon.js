import React from "react";

const TagIcon = ({size, color, className, style, weight, viewBox}) => {
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
        d="M22.3058 14.5275L14.5383 22.295C14.1319 22.7019 13.5805 22.9305 13.0054 22.9305C12.4304 22.9305 11.8789 22.7019 11.4725 22.295L2.16667 13V2.16667H13L22.3058 11.4725C23.1459 12.3176 23.1459 13.6824 22.3058 14.5275Z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="9.20833" cy="9.20833" r="1.625" fill={color} />
    </svg>
  );
};

TagIcon.defaultProps = {
  size: 26,
  weight: 2,
  color: "white",
  viewBox: "0 0 26 26",
  style: {},
  className: "",
};

export default TagIcon;
