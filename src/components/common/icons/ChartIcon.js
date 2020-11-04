import React from "react";

const ChartIcon = ({size, color, className, style, weight, viewBox}) => {
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
        d="M14.14 10.5933C12.9732 13.3526 10.1092 14.9947 7.1385 14.6077C4.1678 14.2207 1.82008 11.8996 1.39918 8.93351C0.978277 5.96743 2.58757 3.08484 5.33332 1.88664"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.6667 7.99999C14.6667 6.23188 13.9643 4.53619 12.714 3.28595C11.4638 2.03571 9.76811 1.33333 8 1.33333V7.99999H14.6667Z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

ChartIcon.defaultProps = {
  size: 24,
  weight: 1,
  color: "#666666",
  viewBox: "0 0 16 16",
  style: {},
  className: "",
};

export default ChartIcon;
