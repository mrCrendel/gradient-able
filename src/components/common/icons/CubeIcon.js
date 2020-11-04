import React from "react";

const CubeIcon = ({size, color, className, style, weight, viewBox}) => {
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
        d="M8.59335 0.966616L13.9267 3.63328C14.3798 3.85844 14.6664 4.32065 14.6667 4.82662V11.18C14.6664 11.6859 14.3798 12.1481 13.9267 12.3733L8.59335 15.04C8.21777 15.2279 7.77559 15.2279 7.40001 15.04L2.06668 12.3733C1.61401 12.1452 1.32982 11.6802 1.33335 11.1733V4.82662C1.33361 4.32065 1.62024 3.85844 2.07335 3.63328L7.40668 0.966616C7.78043 0.780893 8.21959 0.780893 8.59335 0.966616Z"
        stroke={color}
        stroke-width={weight}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.54666 4.10662L7.99999 7.33328L14.4533 4.10662"
        stroke={color}
        stroke-width={weight}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 15.1733V7.33333"
        stroke={color}
        stroke-width={weight}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

CubeIcon.defaultProps = {
  size: 24,
  weight: 1,
  color: "#666666",
  viewBox: "0 0 16 16",
  style: {},
  className: "",
};

export default CubeIcon;
