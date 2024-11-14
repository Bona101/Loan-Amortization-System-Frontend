import React from "react";
import { DashboardIcon, PaymentIcon, LoanRequest } from "@/assets/svg";

const Sidebar: React.FC = () => {
  const items = [
    {
      icon: DashboardIcon,
      title: "Dashboard",
    },
    {
      icon: PaymentIcon,
      title: "Request a Loan",
    },
    {
      icon: LoanRequest,
      title: "Payments",
    },
  ];
  return (
    <div className="bg-[#898989] h-screen w-[250px]">
      {items.map((item) => (
        <div className="flex gap-3 h-[50px] hover:bg-[#FFFFFF] p-3 px-[30px] items-center">
          <div>
            <img src={item.icon} alt="" />
          </div>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
