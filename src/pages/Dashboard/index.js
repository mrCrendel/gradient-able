import React from "react";
import Reports from "./componets/Reports";
import BiaxialLineChart from "../../components/recharts/BiaxialLineChart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Reports />
      <div>
        <div className="unique-visitor box">
          <h2>Unique Visitor</h2>
          <BiaxialLineChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
