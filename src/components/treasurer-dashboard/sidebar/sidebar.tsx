import React, { useState } from "react";
import {
  DashboardIcon,
  PaymentIcon,
  LoanRequest,
  ProfileIcon,
  SettingsIcon,
  LogoutIcon,
} from "@/assets";
import { useNavigate } from "@tanstack/react-router";

export const TreasurerSidebar: React.FC = () => {
  const items = [
    {
      icon: DashboardIcon,
      title: "Dashboard",
      route: "/treasurer",
      subsections: [],
    },
    {
      icon: PaymentIcon,
      title: "Tables",
      route: "/treasurer/tables/January",
      // subroutes: ["/treasurer/tables"],
      subsections: [
        { icon: "", title: "January", route: "/treasurer/tables/January" },
        { icon: "", title: "February", route: "/treasurer/tables/February" },
        { icon: "", title: "March", route: "/treasurer/tables/March" },
        { icon: "", title: "April", route: "/treasurer/tables/April" },
        { icon: "", title: "May", route: "/treasurer/tables/May" },
        { icon: "", title: "June", route: "/treasurer/tables/June" },
        { icon: "", title: "July", route: "/treasurer/tables/July" },
        { icon: "", title: "August", route: "/treasurer/tables/August" },
        { icon: "", title: "September", route: "/treasurer/tables/September" },
        { icon: "", title: "October", route: "/treasurer/tables/October" },
        { icon: "", title: "November", route: "/treasurer/tables/November" },
        { icon: "", title: "December", route: "/treasurer/tables/December" },
        { icon: "", title: "Yearly", route: "/treasurer/tables/Yearly" },
      ],
    },

    {
      icon: LogoutIcon,
      title: "Logout",
      route: "/",
      subsections: [],
    },
  ];

  const navigate = useNavigate();

  const [showTables, setShowTables] = useState(false);

  return (
    <div className="sticky top-0 bg-[#54B8B8] h-screen w-[250px]">
      {items.map((item) => (
        <div>
          <div
            className="flex gap-3 h-[50px] hover:bg-[#FFFFFF] p-3 px-[30px] items-center"
            onClick={() => {
              if (item.title === "Tables") {
                setShowTables((prev) => !prev);
              } else {
                navigate({ to: item.route });
              }
            }}
          >
            <div>{item.icon && <img src={item.icon} alt="" />}</div>
            <p>{item.title}</p>
          </div>
          {showTables &&
            item.subsections.map((subsection) => (
              <div
                className="flex gap-3 h-[50px] hover:bg-[#FFFFFF] p-3 px-[30px] items-center"
                onClick={() => {
                  navigate({ to: subsection.route });
                }}
              >
                <div>
                  {subsection.icon && <img src={subsection.icon} alt="" />}
                </div>
                <p className="pl-10">{subsection.title}</p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};
