import React from "react";
import {Logo, AlinkLeft, Search, Notification, Messages, Avatar} from "./components";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <AlinkLeft />
      <Search />
      <Notification />
      <Messages />
      <Avatar />
    </header>
  );
};

export default Header;
