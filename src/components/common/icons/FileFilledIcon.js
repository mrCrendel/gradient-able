import React from "react";

const FileFilledIcon = ({size, color, className, style, weight, viewBox}) => {
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
        d="M9.33332 1.33334H3.99999C3.26361 1.33334 2.66666 1.93029 2.66666 2.66667V13.3333C2.66666 14.0697 3.26361 14.6667 3.99999 14.6667H12C12.7364 14.6667 13.3333 14.0697 13.3333 13.3333V5.33334L9.33332 1.33334Z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M9.33334 1.33334V5.33334H13.3333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M10.6667 8.66666H5.33334"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M10.6667 11.3333H5.33334"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M6.66668 6H6.00001H5.33334"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

FileFilledIcon.defaultProps = {
  size: 24,
  weight: 1,
  color: "#666666",
  viewBox: "0 0 16 16",
  style: {},
  className: "",
};

export default FileFilledIcon;
