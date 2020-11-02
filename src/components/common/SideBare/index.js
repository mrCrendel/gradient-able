import React from "react";
import {HomeIcon, LayoutIcon, ChevronRightIcon} from "./../icons";

const SideBare = () => {
  return (
    <div className="side-bare">
      <div className="side-bare__container">
        <div className="side-bare__title">Navigation</div>
        <div className="side-bare__link active">
          <a href="#" />
          <HomeIcon weight={2} className="first-icon" />
          <span>Dashboard</span>
        </div>
        <div className="side-bare__link">
          <a href="#" />
          <LayoutIcon weight={1} className="first-icon" />
          <span>Page layouts</span>
          <ChevronRightIcon className="chevron-right-icon" />

          <div className="side-bare__dropdown">
            <div className="side-bare__item">
              <a href="#" className="side-bare__items">
                Link 1
              </a>
            </div>
            <div className="side-bare__item">
              <a href="#" className="side-bare__items">
                Link 2
              </a>
            </div>
            <div className="side-bare__item">
              <a href="#" className="side-bare__items">
                Link 3
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBare;
