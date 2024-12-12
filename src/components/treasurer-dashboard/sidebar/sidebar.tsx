import React, { useState } from "react";
import {
  DashboardIcon,
  PaymentIcon,
  // LoanRequest,
  // ProfileIcon,
  // SettingsIcon,
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
      route: "/treasurer/tables",
      // subroutes: ["/treasurer/tables"],
      subsections: [
        { icon: "", title: "All Transactions", route: "/treasurer/tables/Yearly" },
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
