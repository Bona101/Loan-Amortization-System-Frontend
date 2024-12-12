import React from "react";
import { DashboardIcon, PaymentIcon, LoanRequest, ProfileIcon, SettingsIcon, LogoutIcon } from "@/assets";
import { useNavigate } from "@tanstack/react-router";


const Sidebar: React.FC = () => {
  const items = [
    {
      icon: DashboardIcon,
      title: "Dashboard",
      route: "/sidebar",
    },
    {
      icon: PaymentIcon,
      title: "Request a Loan",
      route: "/sidebar/loan-request",
    },
    {
      icon: PaymentIcon,
      title: "Make a Contribution",
      route: "/sidebar/contribution",
    },
    {
      icon: LoanRequest,
      title: "Payments",
      route: "/sidebar/payments",
    },
    {
      icon: ProfileIcon,
      title: "My Profile",
      route: "/sidebar/editprofile",
    },
    {
      icon: SettingsIcon,
      title: "Settings",
      route: "/sidebar/settings",
    },
    {
      icon: LogoutIcon,
      title: "Logout",
      route: "/",
    },
  ];

    const navigate = useNavigate();

  return (
    <div className="sticky top-0 bg-[#54B8B8] h-screen w-[250px]">
      {items.map((item) => (
        <div
          className="flex gap-3 h-[50px] hover:bg-[#FFFFFF] p-3 px-[30px] items-center"
          onClick={() => {
            navigate({ to: item.route });
          }}
        >
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
