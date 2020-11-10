import React from "react";
import {
  ShoppingCart,
  AwardIcon,
  RepeatIcon,
  TagIcon,
} from "../../../components/common/icons";

const Reports = () => {
  return (
    <div className="reports">
      <div className="report blue box">
        <div className="report__title">Orders Received</div>
        <div className="report__content">
          <ShoppingCart />
          <span>486</span>
        </div>
        <div className="report__bottom-content">
          Completed Orders
          <span>351</span>
        </div>
      </div>
      <div className="report green box">
        <div className="report__title">Total Sales</div>
        <div className="report__content">
          <TagIcon />
          <span>1641</span>
        </div>
        <div className="report__bottom-content">
          This Month
          <span>213</span>
        </div>
      </div>
      <div className="report orange box">
        <div className="report__title">Revenue</div>
        <div className="report__content">
          <RepeatIcon />
          <span>$42,562</span>
        </div>
        <div className="report__bottom-content">
          This Month
          <span>$5,032</span>
        </div>
      </div>
      <div className="report red box">
        <div className="report__title">Total Profit</div>
        <div className="report__content">
          <AwardIcon />
          <span>$42,562</span>
        </div>
        <div className="report__bottom-content">
          This Month
          <span>$5,032</span>
        </div>
      </div>
    </div>
  );
};

export default Reports;
