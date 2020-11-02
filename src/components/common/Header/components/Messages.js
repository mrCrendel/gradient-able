import React, {useState} from "react";
import MessagesIcon from "./../../../../assets/images/svg/messages.svg";
import MailIcon from "./../../../../assets/images/svg/mail.svg";

const Messages = () => {
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setHasUnreadNotifications(!hasUnreadNotifications);
  };

  return (
    <div className="messages">
      <a href="#" className="messages__link" onClick={handleClick} />
      {hasUnreadNotifications ? (
        <img src={MessagesIcon} alt="" />
      ) : (
        <img src={MailIcon} alt="" />
      )}
    </div>
  );
};

export default Messages;
