import React from "react";
import Header from "../components/common/Header";
import SideBare from "../components/common/SideBare";

const Base = ({children, routerProps}) => {
  return (
    <div className="base">
      <Header />
      <div className="container">
        <SideBare />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Base;
