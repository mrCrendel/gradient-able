import React from "react";

const SideBarDropdown = ({components}) => {
  return (
    <div className="side-bare__dropdown">
      {components.map((item) => (
        <button href={item.url} className="side-bare__dropdown__items">
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default SideBarDropdown;
