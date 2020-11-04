import React, {useState} from "react";
import {ChevronRightIcon} from "../../icons";
import cn from "classnames";
import SideBarDropdown from "./SideBarDropdown";

const SideBarLink = ({title, icon, components}) => {
  const [isActive, setIsActive] = useState(false);
  const isCollapsible = !!components?.length;

  const handleClick = (e) => {
    if (isCollapsible) {
      if (e) {
        const content = e.nativeEvent.target.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }
    }
    setIsActive(!isActive);
  };

  return (
    <>
      {title && (
        <div className="side-bare__link">
          <button className={cn({active: isActive})} onClick={handleClick}>
            {icon && React.createElement(icon, {weight: isActive ? 2 : 1})}
            <span>{title}</span>
            {isCollapsible && <ChevronRightIcon className="chevron-right-icon" />}
          </button>
          {isCollapsible && <SideBarDropdown components={components} />}
        </div>
      )}
    </>
  );
};

export default SideBarLink;
