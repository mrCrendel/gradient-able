import React, {useState} from "react";
import BellIcon from "./../../../../assets/images/svg/bell.svg";
import NotificationIcon from "./../../../../assets/images/svg/notification.svg";

const Notification = (props) => {
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setHasUnreadNotifications(!hasUnreadNotifications);
  };

  return (
    <div className="notification">
      <div className="notification__icon">
        <a href="#" className="notification__link" onClick={handleClick} />
        {hasUnreadNotifications ? (
          <img src={NotificationIcon} alt="" className="ellipse" />
        ) : (
          <img src={BellIcon} alt="" />
        )}
      </div>
    </div>
  );
};

export default Notification;
