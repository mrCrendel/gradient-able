import React from "react";

const AwardIcon = ({size, color, className, style, weight, viewBox}) => {
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
        d="M13 16.25C17.1882 16.25 20.5834 12.8548 20.5834 8.66666C20.5834 4.4785 17.1882 1.08333 13 1.08333C8.81186 1.08333 5.41669 4.4785 5.41669 8.66666C5.41669 12.8548 8.81186 16.25 13 16.25Z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M8.89415 15.0475L7.58331 24.9167L13 21.6667L18.4166 24.9167L17.1058 15.0367"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

AwardIcon.defaultProps = {
  size: 26,
  weight: 2,
  color: "white",
  viewBox: "0 0 26 26",
  style: {},
  className: "",
};

export default AwardIcon;
