import React from "react";
import { DashboardIcon, PaymentIcon, LoanRequest, ProfileIcon, SettingsIcon, LogoutIcon } from "@/assets";
import { useNavigate, useRouter } from "@tanstack/react-router";
import { signOut } from "@/utils/auth";


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
      title: "Contibute",
      route: "/sidebar/contribution",
    },
    // {
    //   icon: LoanRequest,
    //   title: "Payments",
    //   route: "/sidebar/payments",
    // },
    {
      icon: ProfileIcon,
      title: "My Profile",
      route: "/sidebar/editprofile",
    },
    // {
    //   icon: SettingsIcon,
    //   title: "Settings",
    //   route: "/sidebar/settings",
    // },
    {
      icon: LogoutIcon,
      title: "Logout",
      route: "/",
    },
  ];

    const navigate = useNavigate();
      const router = useRouter();

  return (
    <div className="sticky top-0 bg-[#54B8B8] h-screen w-[250px]">
      {items.map((item) => (
        <div
          className="flex gap-3 h-[50px] hover:bg-[#FFFFFF] p-3 px-[30px] items-center"
          onClick={() => {
            if (item.title === "Logout") {
              signOut();
              router.invalidate();
            } 
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
