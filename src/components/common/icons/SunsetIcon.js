import React from "react";

const SunsetIcon = ({size, color, className, style, weight, viewBox}) => {
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
        d="M28.3333 28.3333C28.3333 23.731 24.6024 20 20 20C15.3976 20 11.6667 23.731 11.6667 28.3333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M20 13.3334V1.66669"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M7.03334 15.3666L9.40001 17.7333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M1.66667 28.3333H5.00001"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M35 28.3333H38.3333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M30.6 17.7333L32.9667 15.3666"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M38.3333 35H1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M26.6667 6.66669L20 13.3334L13.3333 6.66669"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

SunsetIcon.defaultProps = {
  size: 40,
  weight: 3,
  color: "#666666",
  viewBox: "0 0 40 40",
  style: {},
  className: "",
};

export default SunsetIcon;
