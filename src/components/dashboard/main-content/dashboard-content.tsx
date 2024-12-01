import React from "react";
import { AreaChart1 } from "@/components/dashboard/main-content/area-chart";
import Repayment from "@/components/dashboard/main-content/repayment";
import TransactionHistory from "@/components/dashboard/main-content/transaction-history";

const DashboardContent: React.FC = () => {

  return (
    <div className="mx-[40px] flex-grow">
      <div className="">
        <p className="text-2xl p-4 mb-5">Welcome back, Abdullah!</p>

        <Repayment />

        <AreaChart1 />

        <TransactionHistory />
      </div>
    </div>
  );
};

export default DashboardContent;
