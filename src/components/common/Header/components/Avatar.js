import React from "react";
import AvatarImg from "./../../../../assets/images/png/Profile Image.png";

const Avatar = (props) => {
  return (
    <div className="avatar">
      <a href="#" className="avatar__link" />
      <img src={AvatarImg} alt="" />
    </div>
  );
};

export default Avatar;
