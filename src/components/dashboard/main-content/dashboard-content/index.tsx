import React from "react";
import { AreaChart1 } from "@/components/dashboard/main-content/dashboard-content/area-chart";
import Repayment from "@/components/dashboard/main-content/dashboard-content/repayment";
import TransactionHistory from "@/components/dashboard/main-content/dashboard-content/transaction-history";
import { BarChart_ } from "./bar-chart";
import { PieChart_ } from "./pie-chart";

const DashboardContent: React.FC = () => {

  return (
    <div className="m-[40px] flex-grow">
      <div className="">
        <p className="text-2xl p-4 mb-5">Welcome back, Abdullah!</p>

        <Repayment />

        <div className="flex gap-[100px]">
          <BarChart_/>
          <PieChart_/>
        </div>

        <TransactionHistory />
      </div>
    </div>
  );
};

export default DashboardContent;
