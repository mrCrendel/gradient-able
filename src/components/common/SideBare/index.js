import React from "react";
import {
  HomeIcon,
  LayoutIcon,
  FileFilledIcon,
  AlignJustifyIcon,
  ChartIcon,
  MapIcon,
  LockIcon,
  LayoutSample,
  SunsetIcon,
} from "./../icons";
import SideBarLink from "./components/SideBarLink";
import {CubeIcon} from "../icons";
import {
  basicComponents,
  pageLayoutsComponents,
  authenticationComponents,
} from "./constants";

const SideBare = () => {
  return (
    <div className="side-bare">
      <div className="side-bare__container">
        <div className="side-bare__title">Navigation</div>
        <SideBarLink title={"Dashboard"} icon={HomeIcon} />
        <SideBarLink
          title={"Page layouts"}
          icon={LayoutIcon}
          components={pageLayoutsComponents}
        />
      </div>
      <div className="side-bare__container">
        <div className="side-bare__title">Ui Element</div>
        <SideBarLink title={"Basic"} icon={CubeIcon} components={basicComponents} />
      </div>
      <div className="side-bare__container">
        <div className="side-bare__title">Forms & Tables</div>
        <SideBarLink title={"Forms"} icon={FileFilledIcon} />
        <SideBarLink title={"Bootstrap table"} icon={AlignJustifyIcon} />
      </div>
      <div className="side-bare__container">
        <div className="side-bare__title">Chart & Maps</div>
        <SideBarLink title={"Chart"} icon={ChartIcon} />
        <SideBarLink title={"Maps"} icon={MapIcon} />
      </div>
      <div className="side-bare__container">
        <div className="side-bare__title">Pages</div>
        <SideBarLink
          title={"Authentication"}
          icon={LockIcon}
          components={authenticationComponents}
        />
        <SideBarLink title={"Sample page"} icon={LayoutSample} />
      </div>
      <div className="side-bare__upgrade">
        <SunsetIcon />
        <h4>Download Pro</h4>
        <p>Getting more features with pro version</p>
        <a href="#">Upgrade Now</a>
      </div>
    </div>
  );
};

export default SideBare;
