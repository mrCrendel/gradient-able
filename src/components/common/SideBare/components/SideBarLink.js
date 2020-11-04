import React, {createRef, useState} from "react";
import {ChevronRightIcon} from "../../icons";
import cn from "classnames";

const SideBarLink = ({title, icon, components}) => {
  const [isActive, setIsActive] = useState(false);
  const isCollapsible = !!components?.length;
  const refCollapse = createRef();

  const handleClick = () => {
    if (isCollapsible && refCollapse?.current) {
      const content = refCollapse.current;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
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
          {isCollapsible && (
            <div className="side-bare__dropdown" ref={refCollapse}>
              {components.map((item) => (
                <button href={item.url} className="side-bare__dropdown__items">
                  {item.title}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SideBarLink;
