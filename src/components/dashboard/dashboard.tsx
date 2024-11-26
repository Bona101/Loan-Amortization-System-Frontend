import React from "react";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import DashboardContent from "@/components/dashboard/main-content/dashboard-content";

const Dashboard: React.FC = () => {
  return <div className="flex">
    <Sidebar />
    <DashboardContent />
  </div>;
};

export default Dashboard;
