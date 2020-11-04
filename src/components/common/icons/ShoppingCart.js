import React from "react";

const ShoppingCart = ({size, color, className, style, weight, viewBox}) => {
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
        d="M8.66667 24.9167C9.86328 24.9167 10.8333 23.9466 10.8333 22.75C10.8333 21.5534 9.86328 20.5833 8.66667 20.5833C7.47005 20.5833 6.5 21.5534 6.5 22.75C6.5 23.9466 7.47005 24.9167 8.66667 24.9167Z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.6667 24.9167C22.8633 24.9167 23.8333 23.9466 23.8333 22.75C23.8333 21.5534 22.8633 20.5833 21.6667 20.5833C20.47 20.5833 19.5 21.5534 19.5 22.75C19.5 23.9466 20.47 24.9167 21.6667 24.9167Z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        stroke={color}
        stroke-width={weight}
        d="M6.1425 6.49999H24.9167L23.0967 15.5892C22.8922 16.6186 21.9793 17.3534 20.93 17.3333H9.47916C8.38444 17.3426 7.45478 16.5338 7.3125 15.4483L5.66583 2.96833C5.52459 1.89106 4.60732 1.08497 3.52083 1.08333H1.08333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

ShoppingCart.defaultProps = {
  size: 26,
  weight: 2,
  color: "white",
  viewBox: "0 0 26 26",
  style: {},
  className: "",
};

export default ShoppingCart;
