import React from "react";
import { AreaChart1 } from "@/components/dashboard/main-content/dashboard-content/area-chart";
import Repayment from "@/components/dashboard/main-content/dashboard-content/repayment";
import TransactionHistory from "@/components/dashboard/main-content/dashboard-content/transaction-history";
import { BarChart_ } from "./bar-chart";
import { PieChart_ } from "./pie-chart";
import { useAuth } from "@/logi";


const DashboardContent: React.FC = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="m-[40px] flex-grow">
      <div className="">
        <p className="text-2xl p-4 mb-5">Welcome back, {user?.Name}!</p>

        <Repayment />

        {/* <div className="flex gap-[100px]"> */}
        <div className="">
          <BarChart_/>
          <PieChart_/>
        </div>

        <TransactionHistory />
      </div>
    </div>
  );
};

export default DashboardContent;
